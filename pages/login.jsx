import { Paper, createStyles, TextInput, PasswordInput, Button, Title, Container } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, getIdToken } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebaseConfig";
// Styles =================================================================================================================
const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 1280,
    backgroundSize: "cover",
    backgroundImage: "url(/img/img-bg-register.png)",
  },

  form: {
    marginLeft: "auto",
    marginRight: 0,
    minHeight: 1280,
    width: 480,
    paddingLeft: 30,
    paddingRight: 30,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      paddingTop: 300,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

// Styles =========================================================================

export default function Login() {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { classes } = useStyles();

  const signUp = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response.user);
        sessionStorage.setItem("Token", response.user.accessToken);
        if (email == "admin@admin.com" && password == "123456") {
          router.push("/admin");
        } else {
          router.push("/home");
        }
      })
      .catch((err) => {
        alert("Cannot Log in");
      });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      sessionStorage.setItem("Token", response.user.accessToken);
      console.log(response.user);
      router.push("/home");
    });
  };

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    if (token) {
      router.push("/home");
    }
  }, []);

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <Container size={2000}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0}>
          <Title order={2} className={classes.title} mt="md" mb={50}>
            Login BCR
          </Title>

          <TextInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} required id="email" label="Email" placeholder="hello@gmail.com" size="md" />
          <PasswordInput value={password} onChange={(event) => setPassword(event.currentTarget.value)} required id="password" label="Password" placeholder="Your password" mt="md" size="md" />
          <Button onClick={signUp} fullWidth type="submit" mt="xl" size="md">
            Sign in
          </Button>
          <Button onClick={signUpWithGoogle} fullWidth type="submit" mt="xl" size="md">
            Sign in with google
          </Button>
        </Paper>
      </div>
    </Container>
  );
}

import React from "react";
import { Paper, createStyles, TextInput, PasswordInput, Button, Title, Text, Anchor, Container } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

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
    width: 450,
    paddingLeft: 30,
    paddingRight: 10,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },

    [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
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

export default function Register() {
  const { classes } = useStyles();

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response.user);
      alert(`user with email ${response.user.email} is signed up successfully`);
      sessionStorage.setItem("Token", response.user.accessToken);
      router.push("/login");
    });
  };

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((response) => {
      console.log(response.user);
      sessionStorage.setItem("Token", response.user.accessToken);
      alert(`user with email ${response.user.email} is signed up successfully`);
      router.push("/login");
    });
  };

  return (
    <Container size={2000}>
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0}>
          <Title order={2} className={classes.title} mt="md" mb={50}>
            Create New Account
          </Title>

          <TextInput value={email} onChange={(event) => setEmail(event.currentTarget.value)} required id="email" label="Email" placeholder="hello@gmail.com" size="md" />
          <PasswordInput value={password} onChange={(event) => setPassword(event.currentTarget.value)} required id="password" label="Password" placeholder="Password" mt="md" size="md" />
          <Button onClick={signUp} fullWidth type="submit" mt="xl" size="md">
            Sign Up
          </Button>
          <Button onClick={signUpWithGoogle} fullWidth type="submit" mt="xl" size="md">
            Sign Up with google
          </Button>

          <Text align="center" mt="md">
            Already have an account?{" "}
            <Link href="/login">
              <Anchor weight={700}>Login</Anchor>
            </Link>
          </Text>
        </Paper>
      </div>
    </Container>
  );
}

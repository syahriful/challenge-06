import React from "react";
import { createStyles, Container, Title, Button, Group, Text, List, ThemeIcon, Center } from "@mantine/core";
import { Check } from "tabler-icons-react";
import HeroCar from "../public/img/img_car.png";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  hero: {
    backgroundColor: "#F1F3FF",
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 3,
  },

  content: {
    maxWidth: 480,
    marginLeft: theme.spacing.xl * 3.5,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    fontFamily: `Helvetica`,
    fontSize: 36,
    lineHeight: 1.2,
    fontWeight: 700,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.hero}>
      <Container size="xl">
        <div className={classes.inner}>
          <Center>
            <div className={classes.content}>
              <Title className={classes.title}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Title>
              <Text mt={16}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam. </Text>

              <Group mt={16}>
                <Button color="green" size="sm" className={classes.control}>
                  Mulai Sewa Mobil
                </Button>
              </Group>
            </div>
          </Center>
          <div className={classes.image}>
            <Image src={HeroCar} alt="Hero Car" />
          </div>
        </div>
      </Container>
    </div>
  );
}

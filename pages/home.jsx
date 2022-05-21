import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { HeaderHome } from "../components/HeaderHome";
import { Hero } from "../components/Hero";

function Home() {
  const router = useRouter();

  useEffect(() => {
    let token = sessionStorage.getItem("Token");
    if (!token) {
      router.push("/");
    }
  }, []);

  const logout = () => {
    sessionStorage.removeItem("Token");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <HeaderHome />
      <Hero />
      <button onClick={logout}>Log Out</button>
    </>
  );
}

export default Home;

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { AdminBar } from "../components/AdminBar";

function Admin() {
  let router = useRouter();

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
        <title>Admin Page</title>
      </Head>
      <AdminBar>
        <h1>Welcome Admin</h1>
      </AdminBar>
    </>
  );
}

export default Admin;

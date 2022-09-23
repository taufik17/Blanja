import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbarwithprofile";
import MyBag from "../components/organisms/mybag";

function Mybag() {
  return (
    <>
      <Head>
        <title>My Bag</title>
        <meta name="description" content="My Bag" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className="pt-4">
        <MyBag />
      </Container>
      
    </>
  );
}

export default Mybag;

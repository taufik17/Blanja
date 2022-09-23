import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbar";
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
      <footer className="footer mt-5 py-3 bg-light">
        <div className="container">
          <span className="text-muted">By FikDev.</span>
        </div>
      </footer>
    </>
  );
}

export default Mybag;

import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbarwithprofile";
import DetailProduct from "../components/organisms/detail";
import Similar from "../components/organisms/similar";

function Detail() {
  return (
    <>
      <Head>
        <title>Detail Produk</title>
        <meta name="description" content="Detail Produk" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className="pt-4">
        <DetailProduct />
        <Similar />
      </Container>
      <footer className="footer mt-5 py-3 bg-light">
        <div className="container">
          <span className="text-muted">By FikDev.</span>
        </div>
      </footer>
    </>
  );
}

export default Detail;

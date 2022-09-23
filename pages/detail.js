import React from 'react'
import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbar";
import DetailProduct from "../components/organisms/detail";

function Detail() {
  return (
    <>
      <Head>
        <title>Detail</title>
        <meta name="description" content="Detail" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className="pt-4">
       <DetailProduct />
      </Container>
      <footer className="footer mt-5 py-3 bg-light">
        <div className="container">
          <span className="text-muted">By FikDev.</span>
        </div>
      </footer>
    </>
  )
}

export default Detail
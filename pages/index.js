import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Situs Belanja Online Terlengkap</title>
        <meta name="description" content="Situs Belanja Online Terlengkap" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container>
        <p>Testing</p>
      </Container>
    </>
  );
}

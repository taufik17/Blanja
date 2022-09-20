import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbar";
import CarouselTrend from "../components/organisms/carouseltrend";
import CarouselCategory from "../components/organisms/carouselcategory";
import New from "../components/organisms/new";
import Popular from "../components/organisms/popular";

export default function Home() {
  return (
    <>
      <Head>
        <title>Situs Belanja Online Terlengkap</title>
        <meta name="description" content="Situs Belanja Online Terlengkap" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <Container className="pt-4">
        <CarouselTrend />
        <CarouselCategory />      
        <New />      
        {/* <Popular /> */}
      </Container>
      <footer className="footer mt-5 py-3 bg-light">
        <div className="container">
          <span className="text-muted">By FikDev.</span>
        </div>
      </footer>
    </>
  );
}

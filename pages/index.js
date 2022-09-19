import Head from "next/head";
import { Container } from "react-bootstrap";
import Navbar from "../components/organisms/navbar";
import CarouselTrend from "../components/organisms/carouseltrend";
import CarouselCategory from "../components/organisms/carouselcategory";

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
      </Container>
      <footer class="footer mt-5 py-3 bg-light">
        <div class="container">
          <span class="text-muted">By FikDev.</span>
        </div>
      </footer>
    </>
  );
}

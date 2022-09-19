import Image from "next/image";
import Link from "next/link";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { FiSearch, FiFilter, FiShoppingCart } from "react-icons/fi";
import HomeStyle from "../../styles/Home.module.css";
import StyleLogin from "../../styles/login.module.css";

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="py-1">
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image src="/image/logo.svg" alt="Logo" width={80} height={30} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div className={`${HomeStyle.search} mx-5`}>
              <form>
                <input type="text" placeholder="Search" />
                <FiSearch className={HomeStyle.icon} />{" "}
              </form>
            </div>
            <Button variant="outline-secondary">
              <FiFilter />
            </Button>
          </Nav>
          <FiShoppingCart className="mx-3" />
          <Link href="/auth/login" passHref>
            <Button className={`${StyleLogin.btnLogin} mx-2 px-4`}>
              Login
            </Button>
          </Link>
          <Link href="/auth/register/customer" passHref>
            <Button className={`${StyleLogin.btnRegister} mx-2 px-4`}>
              Signup
            </Button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;

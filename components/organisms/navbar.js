import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { Button, Container, Form, Modal, Nav, Navbar } from "react-bootstrap";
import { FiSearch, FiFilter, FiShoppingCart } from "react-icons/fi";
import HomeStyle from "../../styles/Home.module.css";
import StyleLogin from "../../styles/login.module.css";

function NavMenu() {
  const [show, setShow] = useState(false);
  const [black, setblack] = useState(false);
  const [white, setwhite] = useState(false);
  const [red, setred] = useState(false);
  const [gray, setgray] = useState(false);
  const [yellow, setyellow] = useState(false);
  const [blue, setblue] = useState(false);

  const [xs, setxs] = useState(false);
  const [s, sets] = useState(false);
  const [m, setm] = useState(false);
  const [l, setl] = useState(false);
  const [xl, setxl] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const uncheckblack = () => setblack(false);
  const checkblack = () => setblack(true);
  const uncheckwhite = () => setwhite(false);
  const checkwhite = () => setwhite(true);
  const uncheckred = () => setred(false);
  const checkred = () => setred(true);
  const uncheckgray = () => setgray(false);
  const checkgray = () => setgray(true);
  const uncheckyellow = () => setyellow(false);
  const checkyellow = () => setyellow(true);
  const uncheckblue = () => setblue(false);
  const checkblue = () => setblue(true);

  const uncheckxs = () => setxs(false);
  const checkxs = () => setxs(true);
  const unchecks = () => sets(false);
  const checks = () => sets(true);
  const uncheckm = () => setm(false);
  const checkm = () => setm(true);
  const uncheckl = () => setl(false);
  const checkl = () => setl(true);
  const uncheckxl = () => setxl(false);
  const checkxl = () => setxl(true);

  return (
    <>
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
              <Button variant="outline-secondary" onClick={handleShow}>
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

      <Modal show={show} onHide={handleClose}>
        <div className={`${HomeStyle.modalHeader} modal-header`}>
          <Button
            className={`${HomeStyle.btnClose} btn-close`}
            onClick={handleClose}
          ></Button>
          <h5 className="modal-title" id="exampleModalLabel">
            Filter
          </h5>
        </div>
        <Modal.Body className={HomeStyle.divContent}>
          <h6>Colors</h6>
          <div className="row">
            <div className="col">
              {black ? (
                <>
                  <div
                    className={`${HomeStyle.colorBlack} ${HomeStyle.activeBlack}`}
                    onClick={uncheckblack}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorBlack}`}
                    onClick={checkblack}
                  />
                </>
              )}
            </div>
            <div className="col">
              {white ? (
                <>
                  <div
                    className={`${HomeStyle.colorWhite} ${HomeStyle.activeWhite}`}
                    onClick={uncheckwhite}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorWhite}`}
                    onClick={checkwhite}
                  />
                </>
              )}
            </div>
            <div className="col">
              {red ? (
                <>
                  <div
                    className={`${HomeStyle.colorRed} ${HomeStyle.activeRed}`}
                    onClick={uncheckred}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorRed} `}
                    onClick={checkred}
                  />
                </>
              )}
            </div>
            <div className="col">
              {gray ? (
                <>
                  <div
                    className={`${HomeStyle.colorGray} ${HomeStyle.activeGray}`}
                    onClick={uncheckgray}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorGray} `}
                    onClick={checkgray}
                  />
                </>
              )}
            </div>
            <div className="col">
              {yellow ? (
                <>
                  <div
                    className={`${HomeStyle.colorDarkYellow} ${HomeStyle.activeYellow}`}
                    onClick={uncheckyellow}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorDarkYellow} `}
                    onClick={checkyellow}
                  />
                </>
              )}
            </div>
            <div className="col">
              {blue ? (
                <>
                  <div
                    className={`${HomeStyle.colorBlue} ${HomeStyle.activeBlue}`}
                    onClick={uncheckblue}
                  />
                </>
              ) : (
                <>
                  <div
                    className={`${HomeStyle.colorBlue} `}
                    onClick={checkblue}
                  />
                </>
              )}
            </div>
          </div>
        </Modal.Body>
        <Modal.Body className={HomeStyle.divContent}>
          <h6>Sizes</h6>
          {xs ? (
            <>
              <Button
                className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-3`}
                onClick={uncheckxs}
              >
                XS
              </Button>
            </>
          ) : (
            <>
              <Button className={`${HomeStyle.btnSize} px-3`} onClick={checkxs}>
                XS
              </Button>
            </>
          )}
          {s ? (
            <>
              <Button
                className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-3 ms-3`}
                onClick={unchecks}
              >
                S
              </Button>
            </>
          ) : (
            <>
              <Button
                className={`${HomeStyle.btnSize} px-3 ms-3`}
                onClick={checks}
              >
                S
              </Button>
            </>
          )}
          {m ? (
            <>
              <Button
                className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-3 ms-3`}
                onClick={uncheckm}
              >
                M
              </Button>
            </>
          ) : (
            <>
              <Button
                className={`${HomeStyle.btnSize} px-3 ms-3`}
                onClick={checkm}
              >
                M
              </Button>
            </>
          )}
          {l ? (
            <>
              <Button
                className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-3 ms-3`}
                onClick={uncheckl}
              >
                L
              </Button>
            </>
          ) : (
            <>
              <Button
                className={`${HomeStyle.btnSize} px-3 ms-3`}
                onClick={checkl}
              >
                L
              </Button>
            </>
          )}
          {xl ? (
            <>
              <Button
                className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-3 ms-3`}
                onClick={uncheckxl}
              >
                XL
              </Button>
            </>
          ) : (
            <>
              <Button
                className={`${HomeStyle.btnSize} px-3 ms-3`}
                onClick={checkxl}
              >
                XL
              </Button>
            </>
          )}
        </Modal.Body>
        <Modal.Body className={HomeStyle.divContent}>
          <h6>Category</h6>

          <Button
            className={`${HomeStyle.btnSize} ${HomeStyle.activeSize} px-5`}
          >
            All
          </Button>
          <Button className={`${HomeStyle.btnSize} px-5 ms-3`}>Women</Button>
          <Button className={`${HomeStyle.btnSize} px-5 ms-3`}>Men</Button>
          <Button className={`${HomeStyle.btnSize} px-5 mt-3`}>Boys</Button>
          <Button className={`${HomeStyle.btnSize} px-5 mt-3 ms-3`}>
            Girls
          </Button>
        </Modal.Body>
        <Modal.Body className={HomeStyle.divContent}>
          <h6>Brand</h6>

          <Form.Select aria-label="Default select example">
            <option>-Select Brand-</option>
            <option value="1">Adidas</option>
            <option value="2">Originals</option>
            <option value="3">Jack & Jones</option>
            <option value="4">S{"'"}Oliver</option>
          </Form.Select>
        </Modal.Body>
        <div className="modal-footer justify-content-center">
          <Button
            className={`${StyleLogin.btnRegister} mx-2 px-5`}
            onClick={handleClose}
          >
            Discard
          </Button>
          <Button
            className={`${StyleLogin.btnLogin} mx-2 px-5`}
            onClick={handleClose}
          >
            Apply
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default NavMenu;

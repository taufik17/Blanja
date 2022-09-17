import React from "react";
import { Col, Container, Nav, Navbar, Row, Tab } from "react-bootstrap";
import LoginSeller from "../../components/organisms/seller/login";
import LoginCustomer from "../../components/organisms/customer/login";
import Image from "next/image";
import LoginStyle from "../../styles/login.module.css";
import Head from "next/head";

function Login() {
  return (
    <>
      <Head>
        <title>Blanja | Login</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Tab.Container id="left-tabs-example" defaultActiveKey="customer">
        <Row className="pt-3">
          <Col md={{ span: 6, offset: 3 }} class>
            <div className="text-center">
              <Image src="/image/logo.svg" alt="Logo" width={135} height={90} />
              <p className={`${LoginStyle.loginText} p-0`}>
                Please login with your account
              </p>
            </div>

            <Nav variant="pills" className="flex justify-content-center">
              <Nav.Item>
                <Nav.Link
                  eventKey="customer"
                  className={`${LoginStyle.nav1} py-2 px-4`}
                >
                  Customer
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="seller"
                  className={`${LoginStyle.nav2} py-2 px-4`}
                >
                  Seller
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Tab.Content>
          <Tab.Pane eventKey="customer">
            <LoginCustomer />
          </Tab.Pane>
          <Tab.Pane eventKey="seller">
            <LoginSeller />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default Login;

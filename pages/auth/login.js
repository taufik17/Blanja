import React from "react";
import { Col, Container, Nav, Navbar, Row, Tab } from "react-bootstrap";
import Login from "../../components/organisms/login";
import Image from "next/image";
import LoginStyle from "../../styles/login.module.css";

function login() {
  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="customer">
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }} class>
            <div className="text-center">
              <Image src="/image/logo.svg" alt="Logo" width={135} height={90} />
              <p className={`${LoginStyle.loginText} p-0`}>Please login with your account</p>
            </div>

            <Nav variant="pills" className="flex justify-content-center">
              <Nav.Item className={LoginStyle.nav}>
                <Nav.Link eventKey="customer">Customer</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Seller</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Tab.Content>
          <Tab.Pane eventKey="customer">
            <Login />
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <Login />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
}

export default login;

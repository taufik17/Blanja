import React from "react";
import Link from "next/link";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import StyleLogin from "../../../styles/login.module.css";
import FormInput from "../../atoms/inputText";

function Login() {
  return (
    <>
      <Container>
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }} class>
            <Form>
              <FormInput size="md" type="email" placeholder="Email" />
              <FormInput size="md" type="password" placeholder="Password" />
              
              <Nav className="justify-content-end">
                <Link href="/auth/reqresetpass" passHref>
                  <a className="rmdecoration">
                    <p className={StyleLogin.textRed}>Forgot Password?</p>
                  </a>
                </Link>
              </Nav>
              <div className="d-grid gap-2">
                <Button className={StyleLogin.btnLogin} size="md">
                  Login
                </Button>
              </div>

              <Nav className="flex justify-content-center pt-4">
                Don{"'"}t have a Blanja account?
                <Link href="/auth/register/customer" passHref>
                  <a className={`${StyleLogin.textRed} rmdecoration px-1`}>
                    Register
                  </a>
                </Link>
              </Nav>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Login;

import React from "react";
import Link from "next/link";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import StyleLogin from "../../../styles/login.module.css";
import FormInput from "../../atoms/inputText";

function Register() {
  return (
    <>
      <Container>
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }} class>
            <Form>
              <FormInput size="lg" type="text" placeholder="Email" />
              <FormInput size="lg" type="password" placeholder="Password" />
              
              <Nav className="justify-content-end">
                <Link href="/auth/forgotpassword" passHref>
                  <a className="rmdecoration">
                    <p className={StyleLogin.textRed}>Forgot Password?</p>
                  </a>
                </Link>
              </Nav>
              <div className="d-grid gap-2">
                <Button className={StyleLogin.btnLogin} size="lg">
                  Login
                </Button>
              </div>

              <Nav className="flex justify-content-center pt-4">
                Don{"'"}t have a Tokopedia account?
                <Link href="/auth/register" passHref>
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

export default Register;

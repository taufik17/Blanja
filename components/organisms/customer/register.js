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
              <FormInput size="md" type="text" placeholder="Name" />
              <FormInput size="md" type="email" placeholder="Email" />
              <FormInput size="md" type="password" placeholder="Password" />
              
              <div className="d-grid gap-2">
                <Button className={StyleLogin.btnLogin} size="md">
                  Register
                </Button>
              </div>

              <Nav className="flex justify-content-center pt-4">
                Already have a Blanja account? 
                <Link href="/auth/login" passHref>
                  <a className={`${StyleLogin.textRed} rmdecoration px-1`}>
                    login
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

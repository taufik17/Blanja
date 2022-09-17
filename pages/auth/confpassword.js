import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import FormInput from "../../components/atoms/inputText";
import StyleLogin from "../../styles/login.module.css";

function ConfPassword() {
  return (
    <>
      <Container>
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }} class>
            <div className="text-center">
              <Image src="/image/logo.svg" alt="Logo" width={135} height={90} />
              <p className={`${StyleLogin.loginText} p-0`}>Reset Password</p>
              <p className={StyleLogin.textRed}>
                You need to change your password to activate your account
              </p>
            </div>
            <Form>
              <FormInput size="md" type="password" placeholder="Password" />
              <FormInput
                size="md"
                type="password"
                placeholder="Confirmation New Password"
              />

              <div className="d-grid gap-2 pt-4">
                <Link href="/auth/login">
                  <Button className={StyleLogin.btnLogin} size="md">
                    Reset
                  </Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ConfPassword;

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, Col, Container, Form, Nav, Row } from "react-bootstrap";
import FormInput from "../../components/atoms/inputText";
import StyleLogin from "../../styles/login.module.css";

function ForgotPassword() {
  return (
    <>
      <Head>
        <title>Blanja | Forgot Password</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Container>
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }} class>
            <div className="text-center">
              <Image src="/image/logo.svg" alt="Logo" width={135} height={90} />
              <p className={`${StyleLogin.loginText} p-0`}>Reset Password</p>
            </div>
            <Form>
              <FormInput size="md" type="email" placeholder="Email" />

              <div className="d-grid gap-2 pt-4">
                <Link href="/auth/confpassword" passHref>
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

export default ForgotPassword;

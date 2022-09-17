import Image from "next/image";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import StyleLogin from "../../styles/login.module.css";
import Link from "next/link";
import Head from "next/head";

function Reqresetpass() {
  React.useEffect(() => {
    document.body.style.backgroundColor = "#F0F5F9";
    return () => {
      document.body.style.backgroundColor = "white";
    };
  });
  return (
    <>
      <Head>
        <title>Blanja | Request Forgot Password</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Container>
        <Row className="pt-5">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className={`${StyleLogin.card} text-center`}>
              <Card.Body>
                <Image
                  src="/image/logo.svg"
                  alt="Logo"
                  width={100}
                  height={90}
                />
                <Card.Title className="mx-5 px-5">
                  Request to Reset Your Account Password
                </Card.Title>
                <Image
                  src="/image/resetpass.svg"
                  alt="Logo"
                  width={200}
                  height={200}
                />
                <Card.Text className="mx-5 px-5 pt-3">
                  The following is the button for you to reset the password.
                </Card.Text>
                <Link href="/auth/forgotpassword" passHref>
                  <Button className={`${StyleLogin.btnLogin} px-5`}>
                    Change Password
                  </Button>
                </Link>
              </Card.Body>
              <Card.Footer
                className={`${StyleLogin.cardFooter} mt-5`}
              ></Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Reqresetpass;

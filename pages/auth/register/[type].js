import { useRouter } from "next/router";
import { Col, Image, Nav, Row, Tab } from "react-bootstrap";
import RegisterCustomer from "../../../components/organisms/customer/register";
import RegisterSeller from "../../../components/organisms/seller/register";
import LoginStyle from "../../../styles/login.module.css";

const Post = () => {
  const router = useRouter();
  const { type } = router.query;

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey={type}>
        <Row className="pt-3">
          <Col md={{ span: 6, offset: 3 }} class>
            <div className="text-center">
              <Image src="/image/logo.svg" alt="Logo" width={135} height={90} />
              <p className={`${LoginStyle.loginText} p-0`}>
                Please sign up with your account
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
            <RegisterCustomer />
          </Tab.Pane>
          <Tab.Pane eventKey="seller">
            <RegisterSeller />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
  //   <p>Post: {type}</p>
};

export default Post;

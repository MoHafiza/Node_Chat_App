import { Form, Stack, Alert, Col, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(authContext);
  return (
    <>
      <Form onSubmit={loginUser}>
        <Row
          style={{
            height: "200vh",
            justifyContent: "center",
            paddingTop: "15%",
          }}
        >
          <Col xs={5}>
            <Stack gap={2}>
              <center>
                <h2>Login</h2>
              </center>
              <br />
              <Form.Control
                type="email"
                placeholder="Email ... ?"
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, email: e.target.value });
                }}
              />
              <br />
              <Form.Control
                type="password"
                placeholder="PassWord ... ?"
                onChange={(e) => {
                  updateLoginInfo({ ...loginInfo, password: e.target.value });
                }}
              />
              <br />
              <Button
                type="submit"
                variant="primary"
                style={{ backgroundColor: "#023047" }}
              >
                {isLoginLoading ? "..." : "Login"}
              </Button>

              {loginError?.error && (
                <Alert variant="danger">
                  <center>
                    <p>{loginError?.message}</p>
                  </center>
                </Alert>
              )}
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;

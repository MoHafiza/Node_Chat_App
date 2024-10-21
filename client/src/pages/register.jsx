import { Form, Stack, Alert, Col, Row, Button } from "react-bootstrap";
import { useContext } from "react";
import { authContext } from "../context/AuthContext";

const Register = () => {
  const {
    registerInfo,
    updateRegisterInfo,
    registerUser,
    registerError,
    isRegisterLoading,} = useContext(authContext);
  return (
    <>
      <Form onSubmit={registerUser}>
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
                <h2>Register</h2>
              </center>
              <br />
              <Form.Control
                type="text"
                placeholder="Name ... ?"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <br />
              <Form.Control
                type="email"
                placeholder="Email ... ?"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <br />
              <Form.Control
                type="password"
                placeholder="PassWord ... ?"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
              <br />
              <Button
                type="submit"
                variant="primary"
                style={{ backgroundColor: "#023047" }}
              >
                {isRegisterLoading ? "Creating account" : "Register"}
              </Button>

              {registerError?.error && (
                <Alert variant="danger">
                  <center>
                    <p>{registerError?.message}</p>
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

export default Register;

/* eslint-disable react-hooks/rules-of-hooks */
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { authContext } from "../context/AuthContext";
import { useContext } from "react";

const navBar = () => {
  const { user, logOutUser } = useContext(authContext);
  return (
    <Navbar
      className="nb-4"
      style={{ height: "7", backgroundColor: "#023047", color: "#93C48B" }}
    >
      <Container>
        <h1>
          <Link to="/" className="link-light text-decoration-none">
            💬<span style={{ cursor: "pointer" }} className="glow"> ChatApp</span>
          </Link>
        </h1>

        <span id="wel">Welcome {user?.name} 😊</span>
        <Nav>
          <Stack direction="horizontal" gap={4}>
            {user && (
              <>
                <Link
                  onClick={() => logOutUser()}
                  to="/login"
                  className="link-light text-decoration-none"
                >
                  <h2 className="glow">LogOut</h2>
                </Link>
              </>
            )}
            {!user && (
              <>
                <Link to="/login" className="link-light text-decoration-none">
                  <h2 className="glow">Login</h2>
                </Link>
                <Link
                  to="/register"
                  className="link-light text-decoration-none"
                >
                  <h2 className="glow">register</h2>
                </Link>
              </>
            )}
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default navBar;

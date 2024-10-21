import { Route, Routes, Navigate } from "react-router-dom";
import Chat from "./pages/chat";
import Login from "./pages/login";
import Register from "./pages/register";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/navBar";
import { authContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {user} = useContext(authContext)
  return (<>
    <NavBar/>
    <Container className="text">
      {/* Remove the semicolon after return */}
      <Routes>
        <Route path="/" element={user ? <Chat /> : <Login/>} />
        <Route path="/login" element={user ? <Chat /> : <Login/>} />
        <Route path="/register" element={user ? <Chat /> : <Register/>} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* The * is for any other page */}
      </Routes>
    </Container>
    </>
  );
}

export default App;

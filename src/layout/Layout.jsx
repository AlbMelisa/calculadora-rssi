import { Outlet, Link, useLocation } from "react-router-dom";
import "./layout.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import image from "../assets/logo-UTN.png";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout-root">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="fixed-top">
        <Container fluid >
          <Navbar.Brand href="#home" className="d-flex">
            <img src={image} alt="" className="align-img" />
            <h4 className="d-flex align-items-center m-1 ps-2">
              Comunicaciones - 3k1 - 2024
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#equipment">Equipos</Nav.Link>

              <Nav.Link href="#antennas">Antenas</Nav.Link>
              <Nav.Link href="#calculator">Calculadora</Nav.Link>

              {/* <Nav.Link href="#use">Modo de uso</Nav.Link> */}
              <Nav.Link href="#aboutme">Sobre mí</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Routes */}
      <main className="flex-grow-1 justify-content-center m-0">
        <Outlet />
      </main>
      {/* Footer */}
      <footer className="bg-dark text-light py-3 mt-auto text-center">
        <p className="mb-0">© 2024 Melisa Albornoz.</p>
      </footer>
    </div>
  );
};

export default Layout;

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const SubHeader = () => {
  return (
    <Navbar
      expand="lg"
      className="fixed-top "
      variant="dark"
      id="header"
    >
      <Navbar.Brand href="index.html">
        <div className="col-xl-11 d-flex align-items-center">
          <h1 className="logo mr-auto">
            <a >C. Cangalli</a>
          </h1>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" >
          
          <NavDropdown title="La Comunidad" className="active" id="mayus" className="ml-3">
            <NavDropdown.Item href="/Presentacion">
              Presentacion
            </NavDropdown.Item>
            <NavDropdown.Item href="/Junta Directiva" >
              Junta Directiva
            </NavDropdown.Item>
            <NavDropdown.Item href="/Registro Familiar" >
            Registro Familiar
            </NavDropdown.Item>
            <NavDropdown.Item href="/Visión y Objetivos" >
            Visión y Objetivos
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Organizacion Comunal" className="active ml-3" id="mayus">
            <NavDropdown.Item href="/Organigrama de la Comunidad">Organigrama de la Comunidad</NavDropdown.Item>
            <NavDropdown.Item href="/Estatuto">Estatuto</NavDropdown.Item>
            <NavDropdown.Item href="/Resoluciones">Resoluciones</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Geografia e Historia" className="active ml-3" id="mayus">
            <NavDropdown.Item href="/Ubicacion">Ubicacion</NavDropdown.Item>
            <NavDropdown.Item href="/Historia">Historia</NavDropdown.Item>
            <NavDropdown.Item hre="/Costumbres">Costumbres</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="nav-menu header-transparent ml-3">
          <Nav.Link href="/Home" More deets className="active">
            Inicio
          </Nav.Link>
          <Nav.Link className="active ">Dank memes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default SubHeader;

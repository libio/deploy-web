import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  const stylelink={ color: 'inherit', textDecoration: 'inherit'}
  return (
    <Navbar
      expand="lg"
      className="fixed-top header-transparent"
      variant="dark"
      id="header"
    >
      <Navbar.Brand >
        <div className="col-xl-11 d-flex align-items-center">
          <h1 className="logo mr-auto">
            <Link to="/" className="footer-top" style={stylelink}>C. Cangalli</Link>
          
          </h1>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="collapse-nav">
        <Nav className="mr-auto"  >
          
          <NavDropdown title="La Comunidad"  className="active collapse-item" id="mayus" >
            <NavDropdown.Item >
              <Link to="/Presentacion" style={stylelink}>Presentacion</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Junta Directiva" style={stylelink}>Junta Directiva</Link>
            </NavDropdown.Item>
            <NavDropdown.Item >
              <Link to="/Registro Familiar" style={stylelink}>Registro Familiar</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Visión y Objetivos" style={stylelink}>Visión y Objetivos</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Organizacion Comunal" className="active ml-3" id="mayus">
            <NavDropdown.Item>
              <Link to="/Organigrama de la Comunidad" style={stylelink}>Organigrama de la Comunidad</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Estatuto" style={stylelink} >Estatuto</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/Resoluciones" style={stylelink}>Resoluciones</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Geografia e Historia" className="active ml-3" id="mayus">
            <NavDropdown.Item >
            <Link to="/Ubicacion" style={stylelink}>Ubicacion</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to="/Historia" style={stylelink}>Historia</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
            <Link to="/Costumbres" style={stylelink}>Costumbres</Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav className="nav-menu header-transparent ml-3">
          <Nav.Link  More deets className="active">
          <Link to="/Home" style={stylelink}>Home</Link>
          </Nav.Link>
          <Nav.Link className="active ">Dank memes</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

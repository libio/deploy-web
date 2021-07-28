import react, { useState } from "react";
import {
  Card,
  Button,
  Row,
  Col,
  Accordion,
  InputGroup,
  FormControl,ListGroup,Table
} from "react-bootstrap";

const RegistroFamiliar = () => {
  const [registro, setRegistro] = useState({
    name: "visible",
  });
  const [classrow, setClassrow] = useState({
    name: "invisible",
  });
  const [classbutton, setClassbuton] = useState({
    name: "visible",
  });
  const [info, setInfo] = useState({
    dni: "",
  });
   // useState para modificar la clasname
   const [className, setClassname] = useState({
    name: "invisible",
  });
  const [datos, setDatos] = useState([]);
  const ClickRegistro = () => {
    console.log(registro.name);
    setRegistro({
      name: "invisible",
    });
    setClassrow({
      name: "visible",
    });
  };
  const handleChange = (event) => {
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
    console.log(info.dni);
  };
  const renderdatos=(player, index)=>{
    return(
      <tr key="index">
        <td>{datos.dni}</td>
        <td>{datos.name+" "+datos.first_name+" "+datos.last_name}</td>
      </tr>
    );
  }
  const ConsultaApi = async () => {
    if (info.dni.length) {
      const response = await fetch(
        "https://dni.optimizeperu.com/api/persons/" + info.dni
      );
      const json = await response.json();
      //console.log(json);
     
      try {
        if (json.dni != undefined) {
          setDatos(...datos,json);
          setClassname({
            name:"visible"
          })
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const MostraData = () => {
    return (
      <Table responsive="sm" className="margin-auto">
      <thead>
        <tr>
          <th>#</th>
          <th>DNI</th>
          <th>Nombres</th>
          <th>A.Paterno</th>
          <th>A.Materno</th>
        </tr>
      </thead>
      <tbody>
        {
        renderdatos()
        }
      </tbody>
    </Table>
    )
    
  };
  return (
    <section id="about">
      <div className="container" data-aos="fade-up">
        <header className="section-header mt-5">
          <h3>Registro Familiar</h3>
          <p>
            El siguiente formulario de registro familiar, nos ayudara a tomar
            datos de las familias que habitan en nuestra comunidad, como dicha
            informacion sera almacenada en una base de datos y sera publica
            dichos datos.
          </p>
        </header>
        <div>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <Accordion defaultActiveKey="0">
                <Card className="text-center">
                  <Card.Header>Registrar mi Familia</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <img src="/assets/img/icons/Familia.png" alt="" />
                    </Card.Title>
                    <Button
                      variante="info"
                      size="lg"
                      block
                      className={registro.name}
                      onClick={ClickRegistro}
                    >
                      Registrarse
                    </Button>
                    <Row className={classrow.name}>
                      <Col sm={3}></Col>
                      <Col sm={6}>
                        <InputGroup className="mb-3">
                          <FormControl
                            placeholder="Ingrese su numero de dni"
                            name="dni"
                            onChange={handleChange}
                          />
                          <InputGroup.Append>
                            <Button variant="success" onClick={ConsultaApi}>
                              Buscar
                            </Button>
                          </InputGroup.Append>
                          
                        </InputGroup>
                       
                      </Col>
                      <Col sm={3}></Col>
                    </Row>
                    <Row className={className.name}>
                            <Col className="justify-content-md-center my-3">
                              {MostraData()}
                            </Col>
                          </Row>
                  </Card.Body>
                </Card>
              </Accordion>
            </Col>
            <Col sm={2}></Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
export default RegistroFamiliar;

import React ,{useState}from "react";
import SoundCloudWidget from "react-simple-soundcloud-widget";
import {
  Carousel,
  Row,
  Col,
  Container,
  Accordion,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import ReactPlayer from "react-player";
import Gallery from 'react-photo-gallery';
const HijosQorichayña = () => {
  
  const [isToggleOn,setisToggleOn]= useState(true);
  const [info, setInfo] = useState({
    estado: false,
  });
  const photos = [
    {
    src:"assets/img/portfolio/hijosqorichayña1.jpg",
    width: 5,
    height: 3
  },
  {
    src:"assets/img/portfolio/hijosqorichayña2.png",
    width: 2,
    height: 1
  },
  {
    src: "assets/img/portfolio/hijosqorichayña4.jpg",
    width: 3,
    height: 4
  },
  {
    src: "assets/img/portfolio/hijosqorichayña5.jpg",
    width: 3,
    height: 4
  },
  {
    src: "assets/img/portfolio/hijosqorichayña6.jpg",
    width: 5,
    height: 3
  }
  ];

 
  const handleChange = () => {
    setisToggleOn({...isToggleOn,
      isToggleOn:!isToggleOn
    });
  };
  const handleClick=()=> {
    setInfo(prevState => ({
      estado: !prevState.estado
    }));
  }
  return (
    <>
      <section className="portfolio-details mt-5" id="about">
        <div className="container mt-5">
          <header className="section-header wow fadeInUp">
            <h3>Conjunto musical folclórico Qori Ch’ayña</h3>
          </header>
          <div className="portfolio-details-container">
            <img
              className="d-block w-100"
              src="assets/img/Qorichayña.png"
              alt="Third slide"
            />
          </div>

          <div className="portfolio-description">
            <p>
              En el distrito de Checacupe nuestra música tradicional se viene
              cultivando desde hace muchas décadas, nuestro conjunto musical
              tiene su origen o raíz en el Centro musical Qori Chayña Por tal
              motivo hemos puesto el nombre de hijos de Qorich’ayña, donde
              nuestros padres, tios ,abuelos iniciaron con dicha agrupación
              musicalen los año 70. Nosotros somos un conjuntomusical joven
              ,conformado por los exintegrantes de dicho centro musical a sí
              mismo los jóvenes en calidad de hijos y nietos de los primeros
              fundadores, nos hemos orqanizado para dar continuidad a la música
              tradicional andina checacupeña,al igual que otroscentros musicales
              de nuestro distrito. Seguimos manteniendo la tradición, la
              originalidad en las interpretaciones musicales,con las canciones e
              instrumentos musicales propios del lugar como son los violínes ,
              las quenas,el arpa andina, la mandolina,el yasban y el acordeón .
            </p>
            <p>
              El sueño de querer tocar en un centro musical de nuestro pueblo,
              se ha hecho realidad parala mayoría de jóvenes que pertenecemos a
              esteconjunto musical, considerando que las agrupaciones musicales
              de años de fundación en la que sus integrantes en su mayoría son
              mayores, no aceptan la incorporación de nuevas generaciones.
              Muestra agrupación musical tiene 4 años de vida artística, guiados
              por los ex integrantes del Centro Musical
              <strong> Qori Ch'ayña</strong>, quienes nos motivaron a
              oranizarnos. El arte de la interpretación musical lo llevamos en
              la sangre, ya que desde niños hemos observado y practicado a
              ocultas de nuestros padres y parientes, quienes nos decían que no
              cojamos los instrumentos musicales , quese podría malograr , asi
              mismo decían que seriamos músicos pobres de grandes, quizá por sus
              propias experiencias, porque a ellos muy pocos o casi nunca les
              valoraron.
            </p>
            {/*               <div>
                <ReactPlayer url="https://soundcloud.com/encantosdelande/pantipallay" />
              </div> */}
          </div>
        </div>
      </section>

      <div className="containermt-2" data-aos="fade-up">
        <section id="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header wow fadeInUp">
              <h3>Integrantes del Conjunto</h3>
              <p>
                El conjunto musical esta conformado por los siguientes
                integrantes:
              </p>
            </header>
            <div className="row">
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon">
                  <img src="/assets/img/acordeon.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Acordeón</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Edgar
                  <br />
                  <strong>Apellidos:</strong> Arminta Quispe
                  <br />
                  <strong>Telefono:</strong> 916062691
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="icon">
                  <img src="/assets/img/violin1.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Violin</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Jose
                  <br />
                  <strong>Apellidos:</strong> Paucar Pachiño
                  <br />
                  <strong>Telefono:</strong> 930992005
                  <div className="social"></div>
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon">
                  <img src="/assets/img/violin1.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Violin</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Juan Pablo
                  <br />
                  <strong>Apellidos:</strong> Arminta Arqque
                  <br />
                  <strong>Telefono:</strong> 953415642
                </p>
              </div>

              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="icon">
                  <img src="/assets/img/arpa.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Arpa</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Jaime
                  <br />
                  <strong>Apellidos:</strong> Bolaños Alarcon
                  <br />
                  <strong>Telefono:</strong> 928127721
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/mandolina.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Mandolina</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Justiniano
                  <br />
                  <strong>Apellidos:</strong> Alarcon Quispe
                  <br />
                  <strong>Telefono:</strong> 921679975
                </p>
              </div>

              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/bateria.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Yasban</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Yojoan
                  <br />
                  <strong>Apellidos:</strong> Arminta Mamani
                  <br />
                  <strong>Telefono:</strong> 984713953
                </p>
              </div>

              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon">
                  <img src="/assets/img/quena.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Quena</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Ivan
                  <br />
                  <strong>Apellidos:</strong> Hancco Pucho
                  <br />
                  <strong>Telefono:</strong> 916062691
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/quena.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Quena</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Hernesto
                  <br />
                  <strong>Apellidos:</strong> Huaman Ccanchi
                  <br />
                  <strong>Telefono:</strong> 943186624
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="icon">
                  <img src="/assets/img/quena.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Quena</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Pablo
                  <br />
                  <strong>Apellidos:</strong> Arminta Montalvo
                  <br />
                  <strong>Telefono:</strong> 973280757
                </p>
              </div>

              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/microfono.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Voz</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Lidia
                  <br />
                  <strong>Apellidos:</strong> Arminta Quispe
                  <br />
                  <strong>Telefono:</strong> 993158857
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/microfono.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Voz</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Bonifacia
                  <br />
                  <strong>Apellidos:</strong> Arminta Quispe
                  <br />
                  <strong>Telefono:</strong> 974871597
                </p>
              </div>
              <div
                className="col-lg-4 col-md-6 box"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="icon">
                  <img src="/assets/img/microfono.png" alt="" />
                </div>
                <h4 className="title">
                  <a href>Voz</a>
                </h4>
                <p className="description">
                  <strong>Nombres:</strong> Judith
                  <br />
                  <strong>Apellidos:</strong> Castañeda Pachiño
                  <br />
                  <strong>Telefono:</strong> 978439893
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="portfolio-details" id="about">
        <div className="container ">
          <header className="section-header">
            <h3>distinción</h3>
            <p>
              Otorgan la distinción como Personalidad meritoria de la Cultura al
              Centro musical folclórico Qori Ch’ayña – PERÚ
            </p>
          </header>
          <div className="">
            <p>
              Con Resolución Ministerial Nº 525-2018-MC. En mérito a su
              contribución al enriquecimiento, a la salvaguardia y la puesta en
              valor del acervo musical y coreográfico tradicional de la zona sur
              del Cusco.
            </p>
            <p>
              Esta agrupación musical formada en 1960 fusiona instrumentos
              musicales ancestrales como la quena, el pinkuyllu y el wankar, con
              instrumentos de origen colonial que fueron adaptados en el ande,
              como el arpa andina, la mandolina, el violín y la batería. En sus
              producciones musicales predominan las interpretaciones de huayno,
              fox incaico, marinera y danzas tradicionales del distrito de
              Checacupe y de la región del Cusco.
            </p>
            <p>
              El estilo musical de los Qori Ch’ayñas es el denominado Orquestín
              Andino; que apareció aproximadamente durante la primera década del
              siglo XX y es representativo de la música tradicional andina.
            </p>
            {/*  <div>
                <ReactPlayer url="https://soundcloud.com/encantosdelande/pantipallay" />
              </div>  */}
            
          </div>
          <Container>
            <Row>
              <Col sm={1} />
              <Col sm={10}>
                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player center-div"
                    controls
                    url="https://www.youtube.com/watch?v=GtU1gJN1T8o&t=445s"
                    width="100%"
                    height="100%"
                  />
                </div>
              </Col>
              <Col sm={1} />
            </Row>
          </Container>
          <section className="breadcrumbs mt-1">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Resolucion de reconocimiento</h2>
                <ol>
                  <li>
                    <a href="index.html">Ver</a>
                  </li>
                  <li>
                    <a href="portfolio.html">Descargar</a>
                  </li>
                  <li>
                    <img src="/assets/img/icons/pdf.png" alt="" />
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section id="skills">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Repertorio de Canciones</h3>
            <p>
              Nuestro repertorio de canciones, que forman parte de nuestra identidad cultural 
              de nuestra Tierra, pais o region ya que exponen nuestras diversas traciones a traves de nuestras
              composiciones musicales.
            </p>
          </header>

          <div className="skills-content">
          <Card>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>
                <SoundCloudWidget url="https://soundcloud.com/libio/centro-musical-qorichaya-cangallinita" />
              </ListGroup.Item>
            </ListGroup>
            </Card.Body>
            </Card>
            <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle onClick={handleClick}  as={Button} variant="danger" size="lg" block eventKey="0">
                  {info.estado ? "Ocultar canciones":"Mostrar mas canciones"}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>
                        <SoundCloudWidget url="https://soundcloud.com/encantosdelande/pantipallay" />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <SoundCloudWidget url="https://soundcloud.com/libio/centro-musical-qorichaya-cangallinita" />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <SoundCloudWidget url="https://soundcloud.com/libio/centro-musical-qorichaya-cangallinita" />
                      </ListGroup.Item>
                      <ListGroup.Item><Button  variant="info" size="lg" ></Button></ListGroup.Item>
                      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        </div>
      </section>
      <section id="portfolio" className="section-bg">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3 className="section-title">Galeria Fotos</h3>
          </header>
          <Gallery photos={photos} />
          
        </div>
      </section>
    </>
  );
};

export default HijosQorichayña;

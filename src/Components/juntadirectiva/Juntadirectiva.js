import React from "react";
import { Form, InputGroup, FormControl, Carousel } from "react-bootstrap";

const Juntadirectiva = () => {
  return (
    <>
      <section id="services">
        <div className="container mt-5" data-aos="fade-up">
          <header className="section-header wow fadeInUp">
            <h3>Junta Directiva Comunal Periodo 2021 - 2024</h3>
            <section id="testimonials" className="section-bg mt-5">
              <div className="container" data-aos="fade-up"></div>
              <Carousel className="testimonials-carousel">
                <Carousel.Item interval={1000}>
                  <div className="testimonial-item">
                    <img
                      src="assets/img/image.png"
                      className="testimonial-img"
                      alt
                    />
                    <h3>Eusebio Fernández Mamani</h3>
                    <h4>Presidente</h4>
                    <p>
                      <img
                        src="assets/img/quote-sign-left.png"
                        className="quote-sign-left"
                        alt
                      />
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                      <img
                        src="assets/img/quote-sign-right.png"
                        className="quote-sign-right"
                        alt
                      />
                    </p>
                  </div>
                </Carousel.Item>
              </Carousel>
            </section>
          </header>
          <div className="row mt-3">
            {/* <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <div className="icon">
                <i className="ion-ios-analytics-outline" />
              </div>
              <h4 className="title">
                <a href>Presidente</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 24681625
                <br />
                <strong>Nombres:</strong> Eusebio
                <br />
                <strong>Apellidos:</strong> Fernandez Huaman
              </p>
            </div> */}
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="ion-ios-bookmarks-outline" />
              </div>
              <h4 className="title">
                <a href>Vice-Presidente</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 24682897
                <br />
                <strong>Nombres:</strong> Dina Marleni
                <br />
                <strong>Apellidos:</strong> Hancco Ayala
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="ion-ios-paper-outline" />
              </div>
              <h4 className="title">
                <a href>Secretario</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 40149267
                <br />
                <strong>Nombres:</strong> Lino Grabiel
                <br />
                <strong>Apellidos:</strong> Huaman Challco
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="icon">
                <i className="ion-ios-speedometer-outline" />
              </div>
              <h4 className="title">
                <a href>Tesorero</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 48106237
                <br />
                <strong>Nombres:</strong> Senovia
                <br />
                <strong>Apellidos:</strong> ccahuana Ramos
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={300}
            >
              <div className="icon">
                <i className="ion-ios-barcode-outline" />
              </div>
              <h4 className="title">
                <a href>Fiscal</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 24682944
                <br />
                <strong>Nombres:</strong> Eugenio
                <br />
                <strong>Apellidos:</strong> Bolaños Montalvo
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="ion-ios-people-outline" />
              </div>
              <h4 className="title">
                <a href>Primer Vocal</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 40023410
                <br />
                <strong>Nombres:</strong> Daniel
                <br />
                <strong>Apellidos:</strong> Montalvo Navarro
              </p>
            </div>
            <div
              className="col-lg-4 col-md-6 box"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="icon">
                <i className="ion-ios-people-outline" />
              </div>
              <h4 className="title">
                <a href>Segundo Vocal</a>
              </h4>
              <p className="description">
                <strong>DNI:</strong> 24682747
                <br />
                <strong>Nombres:</strong> Maria
                <br />
                <strong>Apellidos:</strong> Huayta Quispe
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="portfolio" className="section-bg">
        <div className="container" data-aos="fade-up">
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/Juntadirectivacangalli.jpg"
                    className="img-fluid"
                    alt
                  />
                  <a
                    href="assets/img/portfolio/Juntadirectivacangalli.jpg"
                    className="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="App 2"
                  >
                    <i className="ion ion-eye" />
                  </a>
                  <a href="#" className="link-details" title="More Details">
                    <i className="ion ion-android-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Junta Directiva</a>
                  </h4>
                  <center>2021-2023</center>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-card">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/Comuneros.jpg"
                    className="img-fluid"
                    alt
                  />
                  <a
                    href="assets/img/portfolio/Comuneros.jpg"
                    className="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Card 2"
                  >
                    <i className="ion ion-eye" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Comuneros</a>
                  </h4>
                  <center>Años Atras</center>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 portfolio-item filter-web">
              <div className="portfolio-wrap">
                <figure>
                  <img
                    src="assets/img/portfolio/Cangalliantiguo.jpg"
                    className="img-fluid"
                    alt
                  />
                  <a
                    href="assets/img/portfolio/Cangalliantiguo.jpg"
                    className="link-preview venobox"
                    data-gall="portfolioGallery"
                    title="Web 2"
                  >
                    <i className="ion ion-eye" />
                  </a>
                  <a
                    href="portfolio-details.html"
                    className="link-details"
                    title="More Details"
                  >
                    <i className="ion ion-android-open" />
                  </a>
                </figure>
                <div className="portfolio-info">
                  <h4>
                    <a href="portfolio-details.html">Capilla San Lorenzo</a>
                  </h4>
                  <center>Foto Antigua</center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Comités Especiales</h3>
            <p>
              La comunidad Campesina de <strong>Cangalli</strong> tiene conformada las siguientes comités especiales dentro de la comuna.
            </p>
          </header>
          <div className="row about-cols">
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/Riego.png" alt className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Comité Riego</a>
                </h2>
                <p>
                  <strong>Presidente</strong>: Claudio Canchi Maldonado
                  <br />
                  <strong>Secretario</strong>: ASU Company
                  <br />
                  <strong>Tesorero</strong>: 01 March, 2020
                  <br />
                  <strong>Vocal</strong>: <a href="#">www.example.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={200}>
              <div className="about-col">
                <div className="img">
                  <img
                    src="assets/img/Agricola.png"
                    alt
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Comité Agricola</a>
                </h2>
                <p>
                <strong>Presidente</strong>: Claudio Canchi Maldonado
                  <br />
                  <strong>Secretario</strong>: David Flores Montufar
                  <br />
                  <strong>Tesorero</strong>: Margarita Rivera Moltalvo
                  <br />
                  <strong>Vocal</strong>: Nicolasa Alarcon Paucar
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/Alpaca.png" alt className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Comité Alpaca</a>
                </h2>
                <p>
                <strong>Presidente</strong>: Wilbert Titto alarcon
                  <br />
                  <strong>Secretario</strong>: Tomas Cuyutupa Paucar
                  <br />
                  <strong>Tesorero</strong>: Guadalupe Anco Rojas
                  <br />
                  <strong>Vocal</strong>: Segundina Cruz Arminta
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="about-col">
                <div className="img">
                  <img
                    src="assets/img/Forestacion.png"
                    alt
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Comité Forestacion</a>
                </h2>
                <p>
                <strong>Presidente</strong>: David Ramirez Castillo
                  <br />
                  <strong>Secretario</strong>: ASU Com
                  <br />
                  <strong>Tesorero</strong>: 01 March, 2020
                  <br />
                  <strong>Vocal</strong>: <a href="#">www.example.com</a>
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="about-col">
                <div className="img">
                  <img src="assets/img/jass.png" alt className="img-fluid" />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Comité JASS</a>
                </h2>
                <p>
                <strong>Presidente</strong>: Braulio Maldonado Galindo
                  <br />
                  <strong>Secretario</strong>: Faustino Arminta Arque
                  <br />
                  <strong>Tesorero</strong>: Flavio Huayta Quispe
                  <br />
                  <strong>Vocal</strong>: Isabela Alarcon Medina
                </p>
              </div>
            </div>
            <div className="col-md-4" data-aos="fade-up" data-aos-delay={300}>
              <div className="about-col">
                <div className="img">
                  <img
                    src="assets/img/about-vision.jpg"
                    alt
                    className="img-fluid"
                  />
                  <div className="icon">
                    <i className="ion-ios-list-outline" />
                  </div>
                </div>
                <h2 className="title">
                  <a href="#">Tenientes Auxiliares</a>
                </h2>
                <p>
                <strong>Presidente</strong>: Claudio Canchi Maldonado
                  <br />
                  <strong>Secretario</strong>: ASU Company
                  <br />
                  <strong>Tesorero</strong>: 01 March, 2020
                  <br />
                  <strong>Vocal</strong>: <a href="#">www.example.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Juntadirectiva;

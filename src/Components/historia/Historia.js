import React from "react";
import Qorichayña from "./Qorichayña";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Historia = () => {
  return (
    <section id="about" className="section-bg mt-5">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">Historia</h3>
        </header>
        <div className="row" data-aos-delay={100}>
          <div className="col-lg-12 ml-6 mr-6 ">
            <p>
              A nombre de profesionales y técnicos del pueblo de Cangalli,
              Provincia Canchis, Región Cusco, país PERU; es muy grato
              saludarles y además, presentarles la página web de la Comunidad
              Campesina de Cangalli, organización social conformada por nuestros
              ancestros, quienes ejecutaron en siglos pasados, diversidad de
              obras (escuelas, canales de riego, locales sociales, etc.) al
              servicio del pueblo Cangalli y también al servicio de pueblos
              vecinos, obras financiadas con su propio peculio, bajo el
              principio de solidaridad humana “todos para uno y uno para todos”,
              creando un modelo de desarrollo socio-económico “único”.
            </p>
            <p>
              Es necesario informar que las comunidades campesinas en el Perú
              heredaron las costumbres y tradiciones de los ayllus, pueblos del
              imperio incaico que existió durante siglos anteriores a la
              colonización Española (antes de 1490), quienes bajo sus valores
              culturales expresados en idioma quechua, como "mincacushun" (nos
              ayudaremos trabajando por un bien común para todos), "licachicuy"
              (colaboración en productos como ofrenda al trabajo colectivo),
              "ama llulla" (no ser ocioso), "ama quella" (no ser mentiroso),
              "ama sua" (no ser ladrón), etc. practicaron con intensidad el
              colectivismo agrícola. En resumen, le daban el mayor valor al
              trabajo familiar y colectivo, ya que compartían las tierras
              agrícolas.
            </p>
          </div>
        </div>
        <header className="section-header">
          <h3 className="section-title">Conjuntos musicales</h3>
        </header>
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
                      src="assets/img/Qorichayña.png"
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
                    <a href="/Qori Chayña" className="link-details" title="More Details">
                      <i className="ion ion-android-open" />
                    </a>
                  </figure>
                  <div className="portfolio-info">
                    <h4>
                      <a >Qori Chayña</a>
                    </h4>
                    <center>Conjunto Musical</center>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/Parasqhoyapunku.png"
                      className="img-fluid"
                      alt
                    />
                    <a
                      href="assets/img/portfolio/Parasqhoyapunku.png"
                      className="link-preview venobox"
                      data-gall="portfolioGallery"
                      title="Card 2"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a
                      href="Paras Qhoya Punku"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="ion ion-android-open" />
                    </a>
                  </figure>
                  <div className="portfolio-info">
                    <h4>
                      <a >Paras Qhoya Punku</a>
                    </h4>
                    <center>Conjunto Musical</center>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                <div className="portfolio-wrap">
                  <figure>
                    <img
                      src="assets/img/portfolio/hijosdeqorichayña.png"
                      className="img-fluid"
                      alt
                    />
                    <a
                      href="assets/img/portfolio/hijosdeqorichayña.png"
                      className="link-preview venobox"
                      data-gall="portfolioGallery"
                      title="Web 2"
                    >
                      <i className="ion ion-eye" />
                    </a>
                    <a
                      href="Hijos de Qorichayña"
                      className="link-details"
                      title="More Details"
                    >
                      <i className="ion ion-android-open" />
                    </a>
                  </figure>
                  <div className="portfolio-info">
                    <h4>
                      <a>Hijos de Qorichayña</a>
                    </h4>
                    <center>Conjunto Musical</center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
export default Historia;

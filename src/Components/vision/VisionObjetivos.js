import React from "react";
import {Row,Col} from "react-bootstrap";
const VisionObjetivos = () => {
  return (
    <section id="about">
      <div className="container mt-5" data-aos="fade-up">
        <header className="section-header text-center">
          <h3>Visión y Objetivos</h3>
          <p>
            Nuestra Visión es <strong>SER UNA COMUNIDAD MODELO</strong>, de
            nuestro distrito de <strong>CHECACUPE</strong> y de la provincia de
            Canchis. Para ello nuestra comunidad ha proirizado diferentes
            actividades que se mencionan a continuacion:
          </p>
          <Row>
          <Col sm={2}></Col>
          <Col sm={8}> <img src="/assets/img/icons/vision.png" alt="" /></Col>
          <Col sm={2}></Col>
        </Row>
        </header>
        
        <div className="col-md-12" data-aos="fade-up">
          <ul>

            <li>
              Capacitación y educación permanente para el logro de nuestras
              objetivos.
            </li>
            <li>
              Uso eficiente y eficaz de nuestros recursos humanos y otros como
              nuestra propiedad comunal y los recursos que en él se encuentren.
            </li>
            <li>Buscar dar un valor agregado nuestros recusos primarios.</li>
            <li>
              Implementación e impulso de la actividad empresarial de la
              comunidad.
            </li>
            <li>Puesta en valor de nuestras costumbres.</li>
            <li>Mayor fortalecimiento de nuestras organizaciones.</li>
            <li>
              Elevar la autoestima y calidad de vida de nuestros comuneros y la
              sociedad de <strong>Cangalli</strong>.
            </li>
            <li>
              Impulso al desarrollo con responsabilidad social y ambiental.
            </li>
          </ul>
        </div>
        <p>
          Para lograr nuestra visión tenemos objetivos que venimos
          implementando:
        </p>
        <div className="col-md-12" data-aos="fade-up">
          <ul>
            <li>
              Capacitación para el fortalecimiento de la organización comunal,
              en conceptos básicos y normas legales inherentes al derecho
              comunal.
            </li>
            <li>
              Generación de trabajo para los comuneros a través de convenios y
              acuerdos.
            </li>
            <li>Buscar dar un valor agregado nuestros recusos primarios.</li>
            <li>
              Implementación e impulso de la actividad empresarial de la
              comunidad.
            </li>
            <li>
              Vamos adquiriendo más maquinarias para mejorar nuestros ingresos y
              seguir impulsando la mejora de la calidad de vida.
            </li>
            <li>
              Con los tractores agrícolas y nuestro molino de granos, deseamos
              cambiar el manejo de ganado en la zona, y apoyado con el concurso
              de dos veterinarios mejorar la calidad, producción y productividad
              agropecuaria que nos permita iniciar la transformación de
              productos y a futuro llegar con un valor agregado de nuestros
              productos y logremos ser competitivos en el
              mercado.
            </li>
            
          </ul>
        </div>
      </div>
    </section>
  );
};
export default VisionObjetivos;

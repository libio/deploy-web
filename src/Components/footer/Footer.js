import React from "react";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-info">
              <h3>C. Cangalli</h3>
              <p>
                La comunidad Campesina Cangalli, es una organizacion social,
                reconocida por Resolución Suprema S/N, de fecha 12 de Marzo de
                1926; inscrita en el registro de comunidades campesinas.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>ENLACES ÚTILES</h4>
              <ul>
                <li>
                  <i className="ion-ios-arrow-right" /> <a href="#">Inicio</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right" />{" "}
                  <a href="#">Presentacion</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right" />{" "}
                  <a href="#">Junta Directiva</a>
                </li>
                <li>
                  <i className="ion-ios-arrow-right" />{" "}
                  <a href="#">Resoluciones</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>CONTÁCTENOS</h4>
              <p>
                Jr. Wiracocha Nro. S/N - C. Cangalli <br />
                Checacupe, Canchis
                <br />
                Cusco - Peru <br />
              
                <strong>Email:</strong> comunidadcangalli@gmail.com
                <br />
              </p>
              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100011311989432"
                  target="_blank"
                  className="facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://t.me/joinchat/_08-eFMdJLY4ZWMx"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="fa fa-telegram" />
                </a>
                <a href="#" className="twitter">
                  <i className="fa fa-whatsapp" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Siéntase con toda la confianza para escribirnos, cualquier duda
                o comentario lo pude hacer a través de nuestras redes sociales o
                nuestros números de contacto y correo.
              </p>
              <form action method="post">
                <input type="email" name="email" />
                <input type="submit" defaultValue="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright <strong>C. Cangalli</strong>. Todos los derechos reservados
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">Libio</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

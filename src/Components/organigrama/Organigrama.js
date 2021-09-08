import React, { Fragment } from "react";
const Organigrama = ({ children }) => {
  return (
    <Fragment>
      {children}
      <section id="about">
        <div className="container mt-5" data-aos="fade-up">
          <header className="section-header">
            <h3>Organigrama de la Comunidad</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </header>
          <div className="portfolio-details-container">
            <img
              className="d-block w-100"
              src="assets/img/portfolio/organigramficial.png"
              alt="Third slide"
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Organigrama;

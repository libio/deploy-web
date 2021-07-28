import React from "react";

const Introsections = () => {
  return (
    <section id="intro">
      <div className="intro-container">
        <div
          id="introCarousel"
          className="carousel  slide carousel-fade"
          data-ride="carousel"
        >
          <ol className="carousel-indicators" />
          <div className="carousel-inner" role="listbox">
            <div
              className="carousel-item active"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/PatronSanlorenzo.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                  Nuestras Costumbres
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                 
                  </p>
  

                  
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/Sarge.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    
                  </h2>
                  
                  
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/Alpaca.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                   
                  </h2>
                  
                  
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/RioVilcanota.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Rio Vilcanota y Pitumarca
                  </h2>
  
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/Cangalli.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Comunidad Campesina de Cangalli
                  </h2>
                  
                  
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/PuenteCangalli.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Puente Inca
                  </h2>
                  <p className="animate__animated animate__fadeInUp">
                  </p>
                </div>
              </div>
            </div>
            <div
              className="carousel-item"
              style={{
                backgroundImage: "url(assets/img/intro-carousel/TemploColonial.jpg)",
              }}
            >
              <div className="carousel-container">
                <div className="container">
                  <h2 className="animate__animated animate__fadeInDown">
                    Templo Coonial
                  </h2>
                </div>
              </div>
            </div>
            
          </div>
          <a
            className="carousel-control-prev"
            href="#introCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ion-chevron-left"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#introCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon ion-chevron-right"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Introsections;

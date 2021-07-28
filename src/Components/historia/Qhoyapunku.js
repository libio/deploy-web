import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";

const Qhoyapunku = () => {
  return (
    <>
      <main id="main">
        {/* ======= Breadcrumbs Section ======= */}
        <section className="breadcrumbs">
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <h2>Conjunto Musical Qhoya Punku</h2>
              <ol>
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Historia</a>
                </li>
                <li>Qhoya Punku</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="portfolio-details">
          <div className="container">
            <div className="portfolio-details-container">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/img/portfolio/portfolio-details-1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/img/portfolio/portfolio-details-2.jpg"
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="assets/img/portfolio/portfolio-details-3.jpg"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
              <div className="portfolio-info">
                <h3>Conjunto Musical Qori Ch'ayña</h3>
                <ul>
                  <li>
                    <strong>Fundacion</strong>: Web design
                  </li>
                  <li>
                    <strong>Categoria</strong>: ASU Company
                  </li>
                  <li>
                    <strong>Director</strong>: 01 March, 2020
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href="#">www.example.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="portfolio-description">
              <h2>Conjunto Musical Qori Ch'ayña</h2>
              <p>
                Autem ipsum nam porro corporis rerum. Quis eos dolorem eos
                itaque inventore commodi labore quia quia. Exercitationem
                repudiandae officiis neque suscipit non officia eaque itaque
                enim. Voluptatem officia accusantium nesciunt est omnis tempora
                consectetur dignissimos. Sequi nulla at esse enim cum deserunt
                eius.
              </p>
              {/*               <div>
                <ReactPlayer url="https://soundcloud.com/encantosdelande/pantipallay" />
              </div> */}
            </div>
          </div>
          <div className="containermt-2" data-aos="fade-up">
            <section id="about">
              <div className="container" data-aos="fade-up">
                <header className="section-header">
                  <h3>Integrantes</h3>
                  <p>
                    El Conjunto Musical QoriChàyña esta conformado por los
                    Siguientes integrantes:
                  </p>
                </header>
                <div className="row about-cols">
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="assets/img/about-mission.jpg"
                          alt
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-list-outline" />
                        </div>
                      </div>
                      <h2 className="title">
                        <a href="#">oviosion</a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                        eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="assets/img/about-plan.jpg"
                          alt
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-list-outline" />
                        </div>
                      </div>
                      <h2 className="title">
                        <a href="#">Our Plan</a>
                      </h2>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
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
                        <a href="#">Primera Arpa</a>
                      </h2>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit
                        aut fugit, sed quia magni dolores eos qui ratione
                        voluptatem sequi nesciunt Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
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
                        <a href="#">Our Vision</a>
                      </h2>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit
                        aut fugit, sed quia magni dolores eos qui ratione
                        voluptatem sequi nesciunt Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                  
                </div>
                <div className="row about-cols">
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="assets/img/about-mission.jpg"
                          alt
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-list-outline" />
                        </div>
                      </div>
                      <h2 className="title">
                        <a href="#">oviosion</a>
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur elit, sed do
                        eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={200}
                  >
                    <div className="about-col">
                      <div className="img">
                        <img
                          src="assets/img/about-plan.jpg"
                          alt
                          className="img-fluid"
                        />
                        <div className="icon">
                          <i className="ion-ios-list-outline" />
                        </div>
                      </div>
                      <h2 className="title">
                        <a href="#">Our Plan</a>
                      </h2>
                      <p>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
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
                        <a href="#">Primera Arpa</a>
                      </h2>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit
                        aut fugit, sed quia magni dolores eos qui ratione
                        voluptatem sequi nesciunt Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                  <div
                    className="col-md-3"
                    data-aos="fade-up"
                    data-aos-delay={300}
                  >
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
                        <a href="#">Our Vision</a>
                      </h2>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aut odit
                        aut fugit, sed quia magni dolores eos qui ratione
                        voluptatem sequi nesciunt Neque porro quisquam est, qui
                        dolorem ipsum quia dolor sit amet.
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            </section>
            
            
          </div>
          
        </section>
      </main>
    </>
  );
};

export default Qhoyapunku;

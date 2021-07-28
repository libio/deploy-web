import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import {
  Container,
  Row,
  Col,
  Card,
  Accordion,
  Button,
  ListGroup,
  Form,
} from "react-bootstrap";

const CustomSkinMap = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: -14.024783864435681, lng: -71.45429498262293 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
       // mapTypeId: "satellite",
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 },
            ],
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }],
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }],
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }],
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }],
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }],
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }],
          },
        ],
      }}
    >
      <Marker position={{ lat: -14.02405262961297, lng: -71.45737147628236 }} />
    </GoogleMap>
  ))
);

const Ubicacion = () => {
  const [map, setMap] = useState({
    center: {
      lat: -14.024226981186487,
      lng: -71.45514256068651,
    },
    zoom: 16,
  });
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "a48262a74b1ee94cfe352c3d9830d6c7",
    lat: "-14.024226981186487",
    lon: "-71.45514256068651",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  return (
    <>
      <section id="portfolio" className="section-bg mt-5">
        <div className="container">
          <header className="section-header">
            <h3 className="section-title">Ubicacion</h3>
          </header>
        </div>

        <div className="ml-4 mr-4">
          <Row className="mt-2">
            <Col sm="8" className="mt-1">
              {/* <CustomSkinMap
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDE7m24JEcRjwBU2FgDmysdo7FcPut4ur8"
                loadingElement={<div style={{ height: `60%` }} />}
                containerElement={<div style={{ height: `55vh` }} />}
                mapElement={<div style={{ height: `80%` }} />}
              /> */}
              <div style={{ height: "47vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDE7m24JEcRjwBU2FgDmysdo7FcPut4ur8",
                  }}
                  defaultCenter={map.center}
                  defaultZoom={map.zoom}
                  
                ></GoogleMapReact>
              </div>
            </Col>
            <Col xs sm="4" className="mt-1">
              <ReactWeather
                isLoading={isLoading}
                errorMessage={errorMessage}
                data={data}
                lang="en"
                locationLabel="Cangalli"
                unitsLabels={{ temperature: "ºC", windSpeed: "Km/h" }}
                showForecast
              />
            </Col>
          </Row>
          <Row className="mt-2">
            <Col sm={1}></Col>
            <Col sm={10}>
              <Accordion defaultActiveKey="0">
                <Card className="text-center">
                  <Card.Header>
                    <h3>Datos de Ubicacion</h3>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Row>
                        <Col sm={5}>
                          <img
                            src="/assets/img/icons/mapa.png"
                            alt=""
                            className=""
                          />
                        </Col>
                        <Col sm={7}>
                          <div className=" ">
                            <p className="description mt-1">
                              <Row>
                                <Col>
                                  <strong>DEPARTAMENTO</strong>
                                </Col>
                                <Col>CUSCO</Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>PROVINCIA</strong>
                                </Col>
                                <Col>CANCHIS</Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>DISTRITO</strong>
                                </Col>
                                <Col>CHECACUPE</Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>C. CAMPESINA</strong>
                                </Col>
                                <Col>CANGALLI</Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>COORDENADAS</strong>
                                </Col>
                                <Col>-14.02360243, -71.45651585</Col>
                              </Row>
                              <Row>
                                <Col>
                                  <strong>ALTITUD</strong>
                                </Col>
                                <Col>3440 m s.n.m</Col>
                              </Row>
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </div>
      </section>
    </>
  );
};
export default Ubicacion;

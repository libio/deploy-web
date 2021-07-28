
import React from "react";

import Header from '../header/Header';
import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
const Presentacion = () => {
    const VariantHeader=()=>{

    }
  return (
      <>
      
    <section id="about" className="section-bg mt-5">
      <div  className="container" data-aos="fade-up">
        <header className="section-header">
          <h3 className="section-title">
            BIENVENIDOS A LA COMUNIDAD CAMPESINA DE CANGALLI
          </h3>
        </header>
        <div className="row"  data-aos-delay={100}>
          <div className="col-lg-12 ml-6 mr-6 " >
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
            <h3>Resolucion Suprema de creacion</h3>
            <a href="#">Lima, 12 de marzo de 1926</a>
            <p>
              Visto el expediente adjunto, organizado por los indegenas de la
              parcialidad de cangalli, de la juridiccion del Distrito de
              Checacupe , Provincia de Canhis Region del Cusco, sobre
              reconocimiento y incriptcion oficial de la citada comunidad en
              armonia con lo dispuesto en la resolucion suprema de 28 de agosto
              del ano proximo pasado.
            </p>
            <p>
              Habiendi llenado los recurrentes los tramites preinscritos en la
              citaa resolucion y su ampliatoria de 11 setiembre.
            </p>
            <p>
              Ultimo, y estando a lo informado por el jefe de la seccion de
              asuntos indegenas del ministerio de fomento
            </p>
            <a href="#">Se resuelve</a>
            <p>
              Reconocimiento oficialmente a la comunidad de indegenas de la
              parcialidad de CANGALLI, de la juridiccion del Distrito de
              Checacupe, de la Provincia de Canchis, del Departamento del Cusco,
              y procede a su inscripcion en la seccion respectiva Ministerio de
              fomento.
            </p>
          </div>
        </div>

      
      </div>
    </section>
    </>
  );
};
export default Presentacion;

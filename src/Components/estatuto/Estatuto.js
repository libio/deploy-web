import React, { useState } from "react";
import Viewer, { Worker } from "@phuocng/react-pdf-viewer";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
/* import { Document, Page, pdfjs} from "react-pdf";
import Loader from "./Loader";
import ControlPanel from "./ControlPanel";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;




 */
import estatuto from './estatuto.pdf';


const Estatuto = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }
  return (
    <section id="about" className="mt-5">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h3>Estatuto de la comunidad</h3>
          <p>
            El Presente Estatuto de la Comunidad Campesina de Cangalli es el
            único instrumento que norma la vida institucional de la Comunidad en
            concordancia con la Constitución Política del Estado, la Ley General
            de Comunidades Campesinas, la Ley de Tierras sus reglamentos y otras
            normas compatibles. El Convenio 169 de la OIT, la Declaración sobre
            los Derechos de los Pueblos Indígenas de la ONU, y la Convención
            Interamericana de Derechos Humanos.
          </p>
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

            {/*     <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.worker.js">
              <div style={{ height: "750px" }}>
                <Viewer fileUrl="assets/document/estatuto.pdf" />
              </div>
            </Worker> 
            <div>
              <Loader isLoading={isLoading} />
              <section
                id="pdf-section"
                className="d-flex flex-column align-items-center w-100"
              >
                <ControlPanel
                  scale={scale}
                  setScale={setScale}
                  numPages={numPages}
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  file="/assets/docs/estatuto.pdf"
                />
                <Document
                  file="/assets/docs/estatuto.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} scale={scale} />
                </Document>
              </section>
            </div> */}

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.4.456/build/pdf.worker.min.js">
              <div id="pdfviewer">
                <Viewer fileUrl={estatuto} />
              </div>
            </Worker>
            <section className="breadcrumbs mt-1">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Estatuto</h2>
                  <ol>
                    <li>
                      <a href="index.html">Ver</a>
                    </li>
                    <li>
                      <a
                        href="/assets/docs/estatuto.pdf"
                        download="EstatutoComunidadCangalli.pdf"
                      >
                        Descargar
                      </a>
                    </li>
                    <li>
                      <img src="/assets/img/icons/pdf.png" alt="" />
                    </li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      /
    </section>
  );
};
export default Estatuto;

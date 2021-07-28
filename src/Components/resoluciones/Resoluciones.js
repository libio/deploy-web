import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
//import Viewer, { Worker } from "@phuocng/react-pdf-viewer";

const Resoluciones = () => {
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
          <h3>Resoluciones de la comunidad</h3>
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
        
            <section className="breadcrumbs mt-1">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Estatuto</h2>
                  <ol>
                    <li>
                      <a href="index.html">Ver</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Descargar</a>
                    </li>
                    <li><img src="/assets/img/icons/pdf.png" alt="" /></li>
                  </ol>
                </div>
              </div>
            </section>
            <section className="breadcrumbs mt-1">
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Estatuto</h2>
                  <ol>
                    <li>
                      <a href="index.html">Ver</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Descargar</a>
                    </li>
                    <li><img src="/assets/img/icons/pdf.png" alt="" /></li>
                  </ol>
                </div>
              </div>
            </section>
            <section className="breadcrumbs mt-1" >
              <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>Estatuto</h2>
                  <ol>
                    <li>
                      <a href="index.html">Ver</a>
                    </li>
                    <li>
                      <a href="portfolio.html">Descargar</a>
                    </li>
                    <li><img src="/assets/img/icons/pdf.png" alt="" /></li>
                  </ol>
                </div>
              </div>
            </section>
          </div>
       
      /
    </section>
  );
};
export default Resoluciones;

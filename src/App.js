import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/header/Header";
import Introsections from "./Components//introsections/Introsections";
import Footer from "./Components/footer/Footer";
import Backup from "./Components/backup/Backup";
import Ubicacion from "./Components/ubicacion/Ubicacion";
import Featured from "./Components/featured/Featured";
import "@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css";
import Presentacion from "./Components/presentacion/Presentacion";
import Home from "./Components/home/Home";
import Juntadirectiva from "./Components/juntadirectiva/Juntadirectiva";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Estatuto from "./Components/estatuto/Estatuto";
import Resoluciones from "./Components/resoluciones/Resoluciones";
import SubHeader from "./Components/header/SubHeader";
import Historia from "./Components/historia/Historia";
import Qorichayña from "./Components/historia/Qorichayña";
import Qhoyapunku from "./Components/historia/Qhoyapunku";
import HijosQorichayña from "./Components/historia/HijosQorichayña";
import RegistroFamiliar from "./Components/registrofamiliar/RegistroFamiliar";
import VisionObjetivos from "./Components/vision/VisionObjetivos";
import Organigrama from "./Components/organigrama/Organigrama";
import Prueba from "./Components/historia/Prueba";
import ContainerPresentacion from "./container/presentacion";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Presentacion">
            <Presentacion>
              <SubHeader />
            </Presentacion>
          </Route>
          <Route path="/Junta Directiva">
            <Juntadirectiva>
              <SubHeader />
            </Juntadirectiva>
            <Backup />
          </Route>
          <Route path="/Registro Familiar">
            <RegistroFamiliar>
              <SubHeader />
            </RegistroFamiliar>
            <Backup />
          </Route>
          <Route path="/Visión y Objetivos">
            <VisionObjetivos>
              <SubHeader />
            </VisionObjetivos>
            <Backup />
          </Route>
          <Route path="/Organigrama de la Comunidad">
            <Organigrama>
              <SubHeader />
            </Organigrama>
            <Backup />
          </Route>
          <Route path="/Estatuto">
            
            <Estatuto >
            <SubHeader />
            </Estatuto>
            <Backup />
          </Route>
          <Route path="/Resoluciones">
            <Resoluciones>
              <SubHeader />
            </Resoluciones>
            <Backup />
          </Route>
          <Route path="/Ubicacion">
            <Ubicacion>
              <SubHeader />
            </Ubicacion>
          </Route>
          <Route path="/Historia">
            <Historia>
              <SubHeader />
            </Historia>
          </Route>
          <Route path="/Qori Chayña">
            <Qorichayña>
              <SubHeader />
            </Qorichayña>
            <Backup />
          </Route>
          <Route path="/Paras Qhoya Punku">
            <Qhoyapunku>
              <SubHeader />
            </Qhoyapunku>
            <Backup />
          </Route>
          <Route path="/Hijos de Qorichayña">
            <HijosQorichayña>
              <SubHeader />
            </HijosQorichayña>
            <Backup />
          </Route>
          <Route path="/Costumbres">
            <Prueba>
              <SubHeader />
            </Prueba>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

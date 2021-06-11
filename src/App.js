import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages";
import EntrarPage from "./pages/EntrarPage";
import PerfilPage from "./pages/PerfilPage";
import ConveniosPage from "./pages/ConveniosPage";
import ConveniosPage1 from "./pages/ConveniosPage1";
import AdminPage from "./pages/AdminPage";
import PagosPage from "./pages/PagosPage";
import PagoAfiliadosPage from "./pages/PagoAfilliadosPage";
import FormularioAfiliate from "./pages/FormularioAfiliate";
import PagoAsociacionPage from "./pages/PagoAsociacionPage";
import PagoBonosPage from "./pages/pagoBonosPage";
import PagoPrestamosPage from "./pages/pagoPrestamosPage";
import Buscarconvenios from './pages/Buscarconvenios';
import Buscarconvenios1 from './pages/Buscarconvenios1';
import MisConvenios from './pages/MisConvenios';
import Información from "./pages/Información";
import AdmAfiliados from "./pages/AdmAfiliados";
import Crearconvenio from "./pages/Crearconvenio";
import Otroitem from "./pages/Otroitem";



function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/entrar" component={EntrarPage} exact />
        <Route path="/perfil" component={PerfilPage} exact />
        <Route path="/convenios" component={ConveniosPage} exact />
        <Route path="/convenios1" component={ConveniosPage1} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/pagos" component={PagosPage} exact />
        <Route path="/pagoAfiliados" component={PagoAfiliadosPage} exact />
        <Route path="/formularioAfiliate" component={FormularioAfiliate} exact />
        <Route path="/pagoAsociacion" component={PagoAsociacionPage} exact />
        <Route path="/pagoBonos" component={PagoBonosPage} exact />
        <Route path="/pagoPrestamos" component={PagoPrestamosPage} exact />
        <Route path="/AdmAfiliados" component={AdmAfiliados} exact />

        <Route path='/buscarconvenios' component={Buscarconvenios} exact />
        <Route path='/buscarconvenios1' component={Buscarconvenios1} exact />
        <Route path='/MisConvenios' component={MisConvenios} exact />
        <Route path='/Crearconvenio' component={Crearconvenio} exact />
        <Route path='/otroitem' component={Otroitem} />
        <Route path="/Información" component={Información} exact />


      </Switch>
    </Router>
  );
}

export default App;

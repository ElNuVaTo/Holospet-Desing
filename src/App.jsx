import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navegacion from "./layout/navegacion/Navegacion";
import Carro from "./components/carro-compras/Carro";

import InicioPage from "./pages/InicioPage";
import IngresarPage from "./pages/IngresarPage";
import RegistrarsePage from "./pages/RegistrarsePage";
import InformacionPage from "./pages/InformacionPage";
import ExplorarPage from "./pages/ExplorarPage";
import ProductoPage from "./pages/ProductoPage";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <Navegacion />
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/ingresar" element={<IngresarPage />} />
          <Route path="/registrarse" element={<RegistrarsePage />} />
          <Route path="/informacion" element={<InformacionPage />} />
          <Route path="/explorar" element={<ExplorarPage />} />
          <Route path="/producto/:id" element={<ProductoPage />} />
        </Routes>
        <Carro />
      </BrowserRouter>
    </>
  );
};

export default App;

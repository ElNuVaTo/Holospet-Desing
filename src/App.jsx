import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navegacion from "./layout/navegacion/Navegacion";

import InicioPage from "./pages/InicioPage";
import IngresarPage from "./pages/IngresarPage";
import RegistrarsePage from "./pages/RegistrarsePage";
import InformacionPage from "./pages/InformacionPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import Texto from "../Texto";
import Contraseña from "../Contraseña";
import MetodosExternos from "../MetodosExternos";
import Check from "../Check";
import Boton from "../Boton";
import Walpapper from "../Walpapper";

import PhotosMascota from "../../../assets/photos/pexels-marián-šicko-4214919.jpg";

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 550px;
  overflow: hidden;
  border-radius: 15px;
  background-color: #151515;
  margin: 65px auto;
`;
const Form = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Form_Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0 25px 0;
  gap: 30px 0;
  height: 100%;

  h1 {
    color: white;
  }
`;
const Login = () => {
  const navigate = useNavigate();

  const [correo, setCorreo] = useState("");
  const [contra, setContra] = useState("");

  const onChangeCorreo = (e) => setCorreo(e.target.value);
  const onChangeContra = (e) => setContra(e.target.value);

  const url = "http://localhost:3001/api/usuario/iniciarSesion";
  const login = async () => {
    try {
      const response = await axios.post(url, {
        correo: correo,
        contra: contra,
      });
      sessionStorage.setItem("Auth", response.data.token);
      navigate("/");
    } catch (error) {
      console.error("Error en la solicitud POST:", error);
    }
  };

  const onSubmitIniciarSesion = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <>
      <Box>
        <Form onSubmit={onSubmitIniciarSesion}>
          <Form_Box>
            <h1>Iniciar Sesion</h1>

            <Texto
              htmlFor="Correo electrónico *"
              placeHolder="example@example.com"
              value={correo}
              onChange={onChangeCorreo}
            />
            <Contraseña
              htmlFor="Contraseña *"
              placeHolder="● ● ● ● ● ● ● ●"
              value={contra}
              onChange={onChangeContra}
            />

            <Check>Guardar usuario</Check>
            <Boton Texto="Ingresar" />
          </Form_Box>
          <MetodosExternos />
        </Form>
        <Walpapper
          src={PhotosMascota}
          h2="Ingresa a nuestra tienda!"
          texto="En nuestra tienda, sabemos que cada mascota es única. Por eso, te invitamos a explorar y buscar el producto perfecto para tu fiel compañero."
          href="/registrarse"
          textoLink="¿Aún no tienes una cuenta?"
          textoA="¡Créate una ahora mismo!"
        />
      </Box>
    </>
  );
};

export default Login;

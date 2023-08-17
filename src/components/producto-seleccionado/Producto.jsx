import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductoSolitario from "../../utils/producto-single/ProductoSolitario";

const Producto = () => {
  const id = useParams();
  const [getData, setGetData] = useState();
  const urlDelProducto = `http://localhost:3001/api/producto/${id.id}`;

  useEffect(() => {
    const apiGet = async () => {
      try {
        const response = await axios.get(urlDelProducto);
        setGetData(response.data.producto);
      } catch (err) {
        console.error("Error en la solicitud GET:", err);
      }
    };

    apiGet();
  }, [urlDelProducto]);

  return (
    <>
      <div>{getData && <ProductoSolitario getData={getData} />}</div>
    </>
  );
};

export default Producto;

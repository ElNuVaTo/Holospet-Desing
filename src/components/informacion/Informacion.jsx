import Acordeon from '../../utils/Acordeon';
import MapJson from './PreguntasYRespuestas.json';

const Informacion = () => {
  console.log(MapJson);

  return (
    <>
      {MapJson.map((item, key) => (
        <div key={key}>
          <Acordeon pregunta={item.pregunta} respuesta={item.respuesta} />
        </div>
      ))}
    </>
  );
};

export default Informacion;

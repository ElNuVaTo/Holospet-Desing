import Banner from "../components/Banner/Banner";
import Router from "../components/RouterAlimentos/Router";
import Footer from "../components/footer/footer";
import Novedades from "../components/novedades/Novedades";
import GoogleReviews from "../components/opiniones/GoogleReviews";
import Map from "../components/ubicacion-google-map/Map";

const InicioPage = () => {
  return (
    <>
      <Banner />
      <Router />
      <Novedades />
      <GoogleReviews />
      <Map />
      <Footer />
    </>
  );
};

export default InicioPage;

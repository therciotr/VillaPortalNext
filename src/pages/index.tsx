import Inn from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { Accomodation } from "../components/Rooms";
import { Map } from "../components/Map";
import Footer from "../components/Footer";
// import { MenuItens } from "../components/Header/MenuItens";


export default function Home() {
  return (
    <>
        <Header />
        {/* <MenuItens /> */}
        <Inn /> 
        <Carousel />
        <Accomodation />
        <Map />
        <Footer />     
    </>
  );
}

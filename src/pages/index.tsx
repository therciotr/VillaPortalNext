import Inn from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { Accomodation } from "../components/Rooms";
import { Map } from "../components/Map";


export default function Home() {
  return (
    <>
      
        <Header />
        <Inn /> 
        <Carousel />
        <Accomodation />
        <Map />
     
    </>
  );
}

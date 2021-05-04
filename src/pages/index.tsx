import { Flex, FormControl, Box, Accordion } from "@chakra-ui/react";
import Inn from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { Accomodation } from "../components/Rooms";


export default function Home() {
  return (
    <>
      
        <Header />
        <Inn /> 
        <Carousel />
        <Accomodation />
     
    </>
  );
}

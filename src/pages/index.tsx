import { Flex, FormControl, Box } from "@chakra-ui/react";
import Accomodation from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Rooms from "../components/Rooms";

export default function Home() {
  return (
    <FormControl>
      <Box>
        <Header />
        <Accomodation />
        <Carousel />
        <Rooms />
      </Box>
    </FormControl>
  );
}

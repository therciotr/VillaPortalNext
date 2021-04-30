import { Flex, FormControl, Box } from "@chakra-ui/react";
import Accomodation from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <FormControl>
      <Box>
        <Header />
        <Accomodation />
        <Carousel />
      </Box>
    </FormControl>
  );
}

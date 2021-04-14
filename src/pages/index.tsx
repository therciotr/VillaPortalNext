import { Flex, FormControl, Box } from "@chakra-ui/react";
import Accomodation from "../components/Accommodation";
import Header from "../components/Header";

export default function Home() {
  return (
    <FormControl>
      <Box>
        <Header />
        <Accomodation />
      </Box>
    </FormControl>
  );
}

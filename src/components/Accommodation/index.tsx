import {
  Flex,
  Text,
  Box,
  Image,
  SimpleGrid,
  FormControl,
  Button,
  HStack,
} from "@chakra-ui/react";

export default function Accomodation() {
  return (
    <Flex align="center" justify="center" >
      <SimpleGrid mt="">
        <HStack>
          <Box
            w="101px"
            h="101px"
            bg="linear-gradient(180deg, rgba(90, 146, 255, 0.87) 0%, #086BB3 100%);"
            borderRadius="30px"
            align="center"
            justify="center"
          >
            <Image src="/images/Breakfast.svg" alt="Breakfast" />
          </Box>
          <Box>
            <Image src="/images/Breakfast.svg" alt="Breakfast" />
          </Box>
          <Box>
            <Image src="/images/Breakfast.svg" alt="Breakfast" />
          </Box>
        </HStack>
      </SimpleGrid>
    </Flex>
  );
}

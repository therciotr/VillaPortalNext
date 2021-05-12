import {
    Flex,
    Text,
    Box,
    Image,
    SimpleGrid,
    FormControl,
    Button,
    useBreakpointValue,
    HStack,
  } from "@chakra-ui/react";
import React from "react";

import { FaBeer, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Footer() {
    return (
      <Flex bg="#4E4B4B" borderRadius="8px" width="100%" height="100">
        <Flex>
          <Image src="/images/LOGOTIPO VILLA PORTAL- FOOTER.svg" alt="Logo" />
        </Flex>
        <Flex>
          <HStack>
            <Button colorScheme="facebook" leftIcon={<FaFacebook />} width="10%" />
              
            <Button colorScheme="twitter" leftIcon={<FaTwitter />} />
          </HStack>
        </Flex>
      </Flex>
    );
}
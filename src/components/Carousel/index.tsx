import { Box, SimpleGrid } from "@chakra-ui/react";


export default function Carousel() {

    return(

        <SimpleGrid columns={2} spacing={10}>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
            <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>


    );
}

// export default SimpleGrid;
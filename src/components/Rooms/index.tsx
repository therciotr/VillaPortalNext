import { Box } from '@chakra-ui/layout';
import More from '../../pages/seeMore/[slug]';
import { AccomodationComponents } from "./AccomodationsComponents";


type More = {
  title: string;
}

type HomeProps = {

  allRooms: More[];  

}

export default function CarouselComponentRooms() {

      return(
        
        <Box h="200px">
        <AccomodationComponents />
        </Box>

      );
}
import { Button, Flex, ButtonGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react"
import { Link as ReachLink } from "@reach/router"

export function ButtonSeeMore() {
    
    return(
        <Flex>
            <Link as={ReachLink} to="/src/pages/seeMore/">
            <Button bg="#FEC200" color="#FFFFFF" borderRadius="15px">Ver mais...</Button>
            </Link>
        </Flex>
    );
}
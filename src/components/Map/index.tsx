import { AspectRatio, Box, Flex } from "@chakra-ui/react";
import React from "react";


export function Map() {
    return(
        
        <Box mt="30px" content="center" borderRadius="8px">
            <AspectRatio ratio={16 / 9}>
                <iframe
                    src="https://www.google.com/maps/place/POUSADA+VILLA+PORTAL/@-9.0037225,-35.221428,17z/data=!4m18!1m9!3m8!1s0x7008bbfa21beb2b:0xe17c9b8db24d35e8!2sPOUSADA+VILLA+PORTAL!5m2!4m1!1i2!8m2!3d-9.0037278!4d-35.2192339!3m7!1s0x7008bbfa21beb2b:0xe17c9b8db24d35e8!5m2!4m1!1i2!8m2!3d-9.0037278!4d-35.2192339"
                    //  alt="demo"
                />
            </AspectRatio>
        </Box>
        
    );
}
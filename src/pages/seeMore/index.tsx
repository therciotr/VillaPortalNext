import React from 'react';
import {
  Flex
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import AllRights from "../../components/AllRights";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Accomodation } from "../../components/Rooms";
import client from "../../graphql/client";
import GET_ACCOMODATION from "../../graphql/queries/getAccomodation";
import { IPropsVilla } from "../../types";
import { Map } from "../../components/Map";




export default function SeeMore({ acomodacaos }: IPropsVilla) {
  const [seemore, setSeeMore] = React.useState(true);

  return (
    <> 
         <Header />
         <Flex mt={36}>
          <Accomodation acomodacaos={acomodacaos} seemore={seemore} />
         </Flex>
         
         <Map />
        <Footer />     
        <AllRights />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {


  const acomodacaos = await client.request(GET_ACCOMODATION)
 
  return {
    props: {
      ...acomodacaos,
     
    }
  }

}
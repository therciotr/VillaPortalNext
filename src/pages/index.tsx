import React, { useState, useEffect } from 'react';
import Inn from "../components/Accommodation";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import { AccomodationInitial } from "../components/RoomsInitial";
import { Map } from "../components/Map";
import Footer from "../components/Footer";
import AllRights from "../components/AllRights";
import { base_url } from '../api/index';
import axios from 'axios';
import { GetStaticProps } from 'next';
import client from '../graphql/client';
import GET_PHOTOS from '../graphql/queries/getPhotos';
import { IPropsVilla } from '../types';
import GET_ACCOMODATION from '../graphql/queries/getAccomodation';
import GET_ACCOMODATION_LIMITED from '../graphql/queries/getAccomodationLimited';
 

export default function Home({ fotos, acomodacaosLimited }: IPropsVilla) {

  const [photos, setPhotos] = useState([])
  console.log('acomoda', acomodacaosLimited)

  function fetchPhotos(){
    axios.get(`${base_url}/fotos`)
    .then(response => {
      setPhotos(response.data)
    })
    .catch(err => console.log('Não funcionando '));
  }


  useEffect(() =>{
    fetchPhotos();
  }, [])


  return (
    <>
        <Header />
        <Inn /> 
        <Carousel fotos={fotos}/>
        <AccomodationInitial  acomodacaosLimited={acomodacaosLimited}/>
        <Map />
        <Footer />     
        <AllRights />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const fotos = await client.request(GET_PHOTOS)
  const acomodacaos = await client.request(GET_ACCOMODATION)
  const acomodacaosLimited = await client.request(GET_ACCOMODATION_LIMITED)
  
  return {
    props: {
      ...fotos,
      ...acomodacaos,
      acomodacaosLimited
    }
  }

}
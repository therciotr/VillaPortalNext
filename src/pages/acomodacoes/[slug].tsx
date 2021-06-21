import { GetStaticPaths, GetStaticProps } from 'next';
import {useRouter} from 'next/router'
import { base_url } from '../../api';
import axios from 'axios';
import React from 'react';
import Header from '../../components/Header';
import GeneralCarousel from '../../components/GeneralCarousel';
import { Flex, Text } from '@chakra-ui/react';
import Footer from '../../components/Footer';
import { Map } from "../../components/Map";

import AllRights from '../../components/AllRights';

interface IPropsAcomodacoes {
    id: number;
    Titulo: string;
    Descricao: string;
    imagem: IPropsImagem[];
}

interface IProps {
    acomodacoes: IPropsAcomodacoes
}

interface IPropsImagem {
    url: string;
}


export default function Acomodacoes({ acomodacoes }:IProps){
    const router = useRouter();
    console.log('slug', acomodacoes)
    return(
        <>
        <Header />
        <Flex mt={["5%","20%"]} flexDirection="column" align="center">
            <Text fontSize={[24, 24]} w="50%" textAlign="center">{acomodacoes.Titulo}</Text>
            <GeneralCarousel imagem={acomodacoes.imagem}/>
            <Text ml="10%" mr="10%" mt="5%" mb="10%" dangerouslySetInnerHTML={{ __html: acomodacoes?.Descricao }}/> 
        </Flex>
        <Map />
        <Footer />     
        <AllRights />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const {slug} = ctx.params;
    const { data } = await axios.get(`${base_url}/acomodacaos`)
    const infos = data.find((acomodacao) => acomodacao.slug === slug)
    console.log(infos)
    const acomodacoes = {
        id: infos.id,
        Titulo: infos.Titulo,
        Descricao: infos.Descricao,
        imagem: infos.imagem,
    }


    return {
        props: {
            acomodacoes
        }
    }

}


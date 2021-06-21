const GET_ACCOMODATION = /* GraphQL */ `


query GET_ACCOMODATION {
	acomodacaos {
        id
        Titulo
        Descricao
        imagem {
        url
        }
        slug
    }
}
`

export default GET_ACCOMODATION;
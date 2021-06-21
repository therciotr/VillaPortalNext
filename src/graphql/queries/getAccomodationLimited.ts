const GET_ACCOMODATION_LIMITED = /* GraphQL */ `


query GET_ACCOMODATION  {
	acomodacaos(limit: 3) {
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

export default GET_ACCOMODATION_LIMITED;
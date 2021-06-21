const GET_PHOTOS = /* GraphQL */ `


query GET_PHOTOS {
    fotos {
        id
        Titulo
        imagem {
          url
        }
      }
  }
`

export default GET_PHOTOS;
export interface IPropsVilla {
    fotos?: IPropsPhotos[];
    acomodacaos?: IPropsAccomodation[];
    acomodacaosLimited?: IPropsAccomodationLimited[];
    seemore?:boolean;
}

export interface IPropsPhotos {
    id: number;
    Titulo: string;
    imagem: IPropsImage;
    
}


export interface IPropsImage {
    url: string;
}

export interface IPropsAccomodation {
    id: number;
    Titulo: string;
    Descricao: string;
    imagem: IPropsImage[];
    slug: string;
}

export interface IPropsAccomodationLimited {
    acomodacaos: IPropLimitedAcommodation[];

}

export interface IPropLimitedAcommodation {
    id: number;
    Titulo: string;
    Descricao: string;
    imagem: IPropsImage[];
    slug: string;
}

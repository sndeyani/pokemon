export type Simple = {
    name: string,
    url: string
};

export type PokemonData = {
    name: string;
    src?: string;
    weight: string;
    species: string | any,
    types: Array<{type: Simple}>;
    stats : Array<{stat: Simple}>;
    moves: Array<{move: Simple}>;
    sprites: {
        front_default: string
    }
};

export type PokemonAvatar = {
    id: number,
    name: string,
    sprites: {
        front_default: string
    }
};

export type State = {
    loading: boolean,
    error: null | string,
    data: Array<any>,
    pokemon: Array<any>,
    offset: number
};

export type ButtonProps =  {
    transparent?: boolean;
    outline?: boolean;
    disabled?: boolean
};

export type ImageCardType = {
    avatar?: boolean
};


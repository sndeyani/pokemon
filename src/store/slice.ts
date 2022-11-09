import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {PokemonData, State} from '../utils/types';

export const initialState: State = {
    loading: true,
    error: null,
    data: [],
    pokemon: [],
    offset: 0
}

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        getPokemon: (state: State, action: PayloadAction<{limit: number, offset: number}>) => ({
            ...state,
            loading: true,
            error: null
        }),
        getPokemonSuccess: (state: State, action: PayloadAction<Array<PokemonData>>) => {
            return ({
                ...state,
                data: [...state.data, ...action.payload],
                loading: false,
            })
        },
        getPokemonError: (state: State, action: PayloadAction<string>) => ({
            ...state,
            loading: false,
            error: action.payload
        }),
        getPokemonDetails: (state: State, action: PayloadAction<{name: string}>) => ({
            ...state,
            loading: true
        }),
        getPokemonDetailsSuccess: (state, action: PayloadAction<Array<PokemonData>>) => ({
            ...state,
            pokemon: action.payload,
            loading: false,
        }),
        getPokemonDetailsError: (state: State, action: PayloadAction<string>) => ({
            ...state,
            loading: false,
            error: action.payload
        }),
        setOffset: (state: State, action: PayloadAction<{limit: number}>) => ({
            ...state,
            offset: state.offset + action.payload.limit
        }),
    }
})

export const { actions, reducer, name } = pokemonSlice;
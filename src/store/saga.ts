import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
import {actions} from './slice';

const request = () => axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
});

interface PokemonData { payload: { limit: number, offset: number }, type: string };
interface PokemonDetails { payload: {name: string }, type: string };

export function* getPokemon(option: PokemonData) {
    const {payload: {limit, offset}} = option;
    try {
        const { data:{ results } } = yield call(request().get, `pokemon?limit=${limit}&offset=${offset}`);
        const pokemonData = [];
        if(results.length) {
            for(let i = 0; i < results.length; i++){
                const { data } = yield call(request().get, `pokemon/${results[i].name}`)
                pokemonData.push(data)
            }
        }
        if(pokemonData.length) {
            yield put(actions.getPokemonSuccess(pokemonData));
        }
    } catch (err: any) {
        yield put(actions.getPokemonError(err.message));
    }
}

export function* getPokemonDetails(option: PokemonDetails ) {
    const {payload: { name }} = option;
    try {
        const { data } = yield call(request().get, `pokemon/${name}`);
        if(data.id) {
            yield put(actions.getPokemonDetailsSuccess([data]));
        }
    } catch (err: any) {
        yield put(actions.getPokemonDetailsError(err.message));
    }
}

export function* pokemonSaga() {
    yield takeEvery(actions.getPokemon.type, getPokemon);
    yield takeEvery(actions.getPokemonDetails.type, getPokemonDetails);
}
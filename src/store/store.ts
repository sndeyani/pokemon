import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import {all} from 'redux-saga/effects';
import {combineReducers} from 'redux';

import {reducer as pokemon } from './slice';
import { pokemonSaga} from "./saga";

const reducer = combineReducers({
    pokemon
})

const sagas =  function* rootSaga() {
    yield all([
        pokemonSaga()
    ])
}

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

export default configureStore({
        reducer,
        // @ts-ignore
        initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }).concat(sagaMiddleware),
    }
);

sagaMiddleware.run(sagas);

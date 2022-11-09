import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';
import { useSelector } from 'react-redux';
import {State} from "../utils/types";

export const selectDomain = (state: { pokemon: State }) =>
    state.pokemon || initialState;

export const select = () => createSelector([selectDomain], state => state);

/* eslint-disable */
export default () => useSelector(select());

import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useDispatch} from "react-redux";

import {actions} from "../store/slice";
import selectState from '../store/selector';
import DetailsCard from './DetailsCard';

import {PokemonData} from "../utils/types";
import {toCapitalize} from '../utils/helpers';
import {Container, Details, Flex, ImageCard, Img } from '../utils/styles';

const PokemonDetails: React.FC  = () => {
    const {name} = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const {data, pokemon, error} = selectState();
    const [pokemonDetails, setPokemonDetails] = useState<PokemonData | any>({})

    const modifyData = useCallback((option: Array<PokemonData> | any) => {
        const pokemonData = option.reduce((acc: PokemonData, val: PokemonData) => {
            const { weight, types, stats, moves, species, sprites } = val;
            if (val.name === name) {
                acc.name = val.name;
                acc.src = sprites?.front_default ;
                acc.weight = weight;
                acc.species = species.name;
                acc.types = types;
                acc.stats = stats;
                acc.moves = moves
            }
            return acc;
        }, {})
        setPokemonDetails(pokemonData)
    }, [name])

    useEffect(() => {
        if(data.length === 0){
            dispatch(actions.getPokemonDetails({name: name || ''}))
        } else {
            modifyData(data)
        }
    }, [dispatch, data, name, modifyData])

    useEffect(() => {
        if(data.length === 0 && pokemon.length) {
            modifyData(pokemon)
        }
    }, [data.length, pokemon, modifyData])

    useEffect(() => {
        if(error) {
            navigate('/')
        }
    }, [error, navigate])

    return (
        <Container>
            {pokemonDetails?.name ?
                <Flex>
                    <ImageCard avatar={true}>
                        <h2>{toCapitalize(pokemonDetails.name)}</h2>
                        <Img src={pokemonDetails.src} alt={name}/>
                    </ImageCard>
                    <Details>
                        <DetailsCard title={'Weight'} data={pokemonDetails.weight}/>
                        <DetailsCard title={'Species'} data={pokemonDetails.species}/>
                        <DetailsCard collapsable title={'stat'} data={pokemonDetails.stats}/>
                        <DetailsCard collapsable title={'type'} data={pokemonDetails.types}/>
                        <DetailsCard collapsable title={'move'} data={pokemonDetails.moves}/>
                    </Details>
                </Flex>
            : null }
        </Container>
    );
};

export default PokemonDetails;
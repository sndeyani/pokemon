import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {actions} from '../store/slice';
import selectState from '../store/selector';

import Loading from './Loading';
import SearchField from './SearchField';

import {toCapitalize} from "../utils/helpers";
import {PokemonAvatar} from "../utils/types";
import {Button, Container, ImageCard, ImageContainer, Img, NoData} from '../utils/styles';

const limit = 16;

const Pokemon: React.FC  = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {loading, data, offset } = selectState();
    const [query, setQuery] = useState<string>('')

    const filteredData = useMemo(() => {
        return data.filter((item: {name: string}) => item.name.toLowerCase().includes(query))
    }, [query, data])

    useEffect(() => {
        if(data.length === 0 && offset === 0) {
            dispatch(actions.getPokemon({limit, offset}))
        }
    }, [dispatch, data.length, offset]);

    const handleLoadMore = useCallback(() => {
        dispatch(actions.setOffset({limit}))
        dispatch(actions.getPokemon({limit, offset: offset + limit}))
    }, [dispatch, offset])

    return (
        <Container>
            <SearchField
                handleSearch={(val: string) => setQuery(val)}
                handleClear={() => setQuery('')}
            />
            <ImageContainer>
                {filteredData.map((pokemon: PokemonAvatar ) => (
                    <ImageCard key={pokemon.name + pokemon.id} onClick={() => navigate(pokemon.name) }>
                        <h2>{toCapitalize(pokemon.name)}</h2>
                        <Img src={pokemon.sprites.front_default} alt={pokemon.name}/>
                    </ImageCard>
                ))}
            </ImageContainer>
            {!loading && filteredData.length === 0 ? <NoData>No Data Found</NoData> : null}
            {data.length > 0 && !query
                ? <Button transparent={true} onClick={handleLoadMore}>Load more ...</Button>
                : loading ? <Loading /> : null
            }
        </Container>
    );
};

export default Pokemon;
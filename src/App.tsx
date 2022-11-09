import React, {lazy} from 'react'
import {Route, Routes} from "react-router-dom";

const Pokemon = lazy(() => import('./components/Pokemon'));
const PokemonDetails = lazy(() => import('./components/PokemonDetails'));

const App: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<Pokemon/>}/>
            <Route path='/:name' element={<PokemonDetails/>}/>
        </Routes>
    )
}

export default App;

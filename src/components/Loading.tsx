import React from 'react'
import {Spinner, Circle} from '../utils/styles';

const Loading: React.FC = () => {
    return (
        <Spinner>
            <Circle />
        </Spinner>
    )
}
export default Loading;

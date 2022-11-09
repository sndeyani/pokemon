import React, {useCallback, useState} from 'react';
import {SearchContainer, Input, Button} from '../utils/styles';

interface SearchProps {
    handleSearch: (val: string) => void;
    handleClear: () => void;
};

const SearchField: React.FC<SearchProps>  = ({handleSearch: handleParentSearch, handleClear: handleParentClear  }:SearchProps) => {
    const [value, setValue] = useState<string>('')

    const handleSearch = useCallback(() => {
        handleParentSearch(value)
    }, [handleParentSearch, value])

    const handleClear = useCallback(() => {
        handleParentClear()
        setValue('')
    }, [handleParentClear])

    return (
        <SearchContainer>
            <Input
                placeholder={'Search...'}
                value={value}
                onChange={(event) => setValue(event.target.value)}
            />
            <Button onClick={handleSearch} disabled={value.length < 3}>Apply</Button>
            <Button outline onClick={handleClear}>Clear</Button>
        </SearchContainer>
    );
};

export default SearchField;
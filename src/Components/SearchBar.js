import React from 'react';
import { Input, Button, Menu } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllMovies, getAllMovies, getInputText, getSelectedMovie, loading, stopLoading } from '../Actions';
import { getSearchMovies } from "../Api/apiService"


const SearchBar = () => {
    const dispatch = useDispatch();
    const onChangeValue = (e) => {
        dispatch(getInputText(e.target.value))
    }

    const value = useSelector(state => state.inputText);

    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/title/find',
        params: { q: value },
        headers: {
            'x-rapidapi-key': '17c0801264msh8e4eb2e0281c145p1013e9jsna02d9582b2b0',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    const onSubmit = async () => {
        dispatch(loading());
        dispatch(deleteAllMovies());
        getSearchMovies(options, data => {
            if (data !== undefined) {
                dispatch(getAllMovies(data))
            }
        }).then(() => {
            dispatch(stopLoading())
        })
        dispatch(getSelectedMovie(""));
    }

    return (
        <div>
            <Menu.Item>
                <Input placeholder='Search movie...' className="input" value={value} onChange={onChangeValue} />
                <Button primary icon='search' className="button" onClick={onSubmit}></Button>
            </Menu.Item>
        </div>
    );
};

export default SearchBar;
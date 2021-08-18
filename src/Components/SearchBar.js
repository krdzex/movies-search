import React from 'react';
import { Input, Button, Menu } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAllMovies, getAllMovies, getInputText, getSelectedMovie } from '../Actions';
import { getSearchMovies } from "../Api/apiService"
import axios from 'axios';

const SearchBar = () => {
    const dispatch = useDispatch();

    const onChangeValue = (e) => {
        dispatch(getInputText(e.target.value))
    }

    const value = useSelector(state => state.inputText);

    let options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: { q: value },
        headers: {
            'x-rapidapi-key': 'ff4e74efc9msh8c41308b3ec305dp1c2665jsn956ffd5c2b8f',
            'x-rapidapi-host': 'imdb8.p.rapidapi.com'
        }
    };

    const onSubmit = async () => {
        dispatch(deleteAllMovies())
        let allMovies;
        getSearchMovies(options, data => {
            allMovies = data
        }).then(async () => {
            for (let i = 0; i < allMovies.length; i++) {
                let options = {
                    method: 'GET',
                    url: 'https://imdb8.p.rapidapi.com/title/get-details',
                    params: { tconst: allMovies[i].id },
                    headers: {
                        'x-rapidapi-key': 'ff4e74efc9msh8c41308b3ec305dp1c2665jsn956ffd5c2b8f',
                        'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                    }
                };
                await axios.request(options).then(response =>
                    dispatch(getAllMovies(response.data))
                ).catch(reason =>
                    console.error(reason)
                );
            }
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
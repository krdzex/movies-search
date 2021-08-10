
import React from 'react';
import { Input, Button, Menu } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies, getInputText, getSelectedMovie } from '../Actions';
import axios from 'axios';

const SearchBar = () => {
    const dispatch = useDispatch();

    const onChangeValue = (e) => {
        dispatch(getInputText(e.target.value))
    }

    const value = useSelector(state => state.inputText);

    const onSubmit = async () => {

        let options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: { q: value },
            headers: {
                'x-rapidapi-key': '56580db411mshaeb26ec4a5b81f0p15ec1ejsn36e21f2f65f9',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };

        await axios.request(options).then(response =>
            dispatch(getAllMovies(response.data.d))
        ).catch(reason =>
            console.error(reason)
        );
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
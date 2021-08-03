import React from 'react';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';


const Header = () => {



    return <div className="headerWrapper">
        <Menu secondary>
            <Menu.Item>
                LOGO
            </Menu.Item>
            <Menu.Menu position='right'>
                <SearchBar />
            </Menu.Menu>
        </Menu>
    </div>
};

export default Header;
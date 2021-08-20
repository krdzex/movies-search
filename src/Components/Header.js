import React from 'react';
import { Menu } from 'semantic-ui-react';
import SearchBar from './SearchBar';
import logo from "../Photos/LOGO.png"

const Header = () => {



    return <div className="headerWrapper">
        <Menu secondary>
            <Menu.Item>
                <img src={logo} alt="logo" style={{
                    height: "30px",
                    width: " 120px"
                }}></img>
            </Menu.Item>
            <Menu.Menu position='right'>
                <SearchBar />
            </Menu.Menu>
        </Menu>
    </div>
};

export default Header;
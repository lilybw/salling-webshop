import logo from '../logo.svg';
import '../app/App.css';
import './Header.css';
import React from 'react';

const Header = (props: {setProductQuery: (query: string) => void}): JSX.Element => {

    const searchRef = React.useRef<HTMLInputElement>(null);

    const setQuery = (query: string) => {
        console.log(query);
        props.setProductQuery(query);
    }

    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div>
                <h1>
                    Salling Webshop
                </h1>
                <h2>
                    By someone who doesn't know how to make a webshop
                </h2>
            </div>
            <div className="search-field">
                <input type="text" placeholder="What do you need?" ref={searchRef} onSubmit={e => setQuery((e.target as HTMLInputElement).value)}/>
            </div>
            <div className="burger-menu">
                <p>|||</p>
            </div>
        </header>
        
    )
}

export default Header;
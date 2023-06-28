import React from 'react';
import logo from './logo.svg';

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                </ul>
            </nav>
        )
    }
}
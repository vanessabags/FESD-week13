import React from 'react';
import logo from './logo.svg';

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><img src={logo} className="App-logo" alt="logo" /></li>
                    <li className='active'><a href='#'>Home</a></li>
                    <li><a href='#'>Products</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        )
    }
}
import React, { Component } from 'react';
import css from './app.css';
import logo from '../assets/svg/react-logo.svg';
import Home from './components/home/home.jsx';

export default class App extends Component {
    render() {
        return (
            <section>
                <nav id="nav">
                    <img id="react-logo" src={ logo } alt="React logo" />
                </nav>
                <Home />
            </section>
        );
    }
}
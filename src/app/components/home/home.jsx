import React, { Component } from 'react';
import css from './home.css';

export default class Home extends Component {
    render() {
        return (
            <section>
                <h2>Hello world!</h2>
                <span id="reminder">
                    Remember to enclose your JSX code in a main block (as a section) in each component
                    to prevent an error from ReactDOM.
                </span>
            </section>
        );
    }
}
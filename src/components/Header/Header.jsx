import React, {Component} from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <header id="header" className="header">
                <h1 className="header__title">React Api Marvel</h1>
            </header>
        );
    }
}

export default Header;
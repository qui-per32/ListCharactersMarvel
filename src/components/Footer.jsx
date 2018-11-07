import React, {Component} from 'react';
import './footer.scss';


class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p className="footer__developer">Developed by: <a href="https://github.com/qui-per32">qui-per32</a></p>
            </footer>
        );
    }
}

export default Footer;
import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService'
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import '../../App.css'

class HeaderComponent extends Component {

    changeColor = () => {
        let btn = document.getElementsByClassName("btn");
        btn.className = "color-change"
    }

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn);

        return (
            <header >
                <nav className="header-color navbar navbar-expand-md navbar-dark bg-dark">
                    {isUserLoggedIn && <div><Link to="/welcome/michuking" className="navbar-brand">Home</Link></div>}
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <label className="switch">
                            <input onChange={this.changeColor} type="checkbox"/>
                            <span className="slider round"></span>
                        </label>
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
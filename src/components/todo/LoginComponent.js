import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService'
import '../../App.css';

class LoginComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: 'ryniek',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
    }

    handleChange = (event) => {
            //console.log(this.state)
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

    loginClicked = () => {
        let i = 0;
          if (i == 0) {
            i = 1;
            let elem = document.getElementById("myBar");
            let width = 10;
            let id = setInterval(frame, 10);
            function frame() {
              if (width >= 100) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        // if(this.state.username==='ryniek' && this.state.password==='michu')
        // {

        //     AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
        //     this.props.history.push(`/welcome/${this.state.username}`)
        // }
        // else
        // {
        //     this.setState({showSuccessMessage: false})
        //     this.setState({hasLoginFailed: true})
        // }

        AuthenticationService.executeBasicAuthenticationService(this.state.username, this.state.password)
        .then(
            () => {
                AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
                this.props.history.push(`/welcome/${this.state.username}`)
            }
        )
        .catch(
            () => {
                this.setState({showSuccessMessage: false})
                this.setState({hasLoginFailed: true})
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {/* <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                    {/*this.state.showSuccessMessage && <div>Login Successful</div>*/}
                    Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    <button className="button" onClick={this.loginClicked}>Login</button>
                    <br/>
                    <br/>
                    <div id="myProgress">
                        <div id="myBar">0%</div>
                    </div>
                </div>
            </div>
        );
    }
}


// function ShowInvalidCredentials(props) {
//     if(props.hasLoginFailed)
//         return <div>Invalid Credentials</div>
//     return null;
// }

// function ShowSuccessMessage(props) {
//     if(props.showSuccessMessage)
//         return <div>Login Successful</div>
//     return null;
// }

export default LoginComponent;
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     welcomeMessage: '',
        //     errorMessage: ''
        // }
    }

    // retriveWelcomeMessage = () => {
    //     // HelloWorldService.executeHelloWorldService()
    //     // .then(response => this.handleSuccessfulResponse(response) & console.log(response))
    //     // .catch()

    //     // HelloWorldService.executeHelloWorldBeanService()
    //     // .then(response => this.handleSuccessfulResponse(response) & console.log(response))
    //     // .catch()

    //     HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
    //     .then(response => this.handleSuccessfulResponse(response) & console.log(response))
    //     .catch(error => this.handleError(error))
    // }

    // handleSuccessfulResponse = (respone) => {
    //     this.setState({
    //         welcomeMessage : respone.data.message
    //     })
    // }

    // handleError = (error) => {
    //     console.log(error.response.data.message)
    //      this.setState({
    //          errorMessage : error.response.data.message
    //      })
    // }

    render() {
        return (
            <>
                <h1>Dzień dobry</h1>
                <div className="container">
                    Witaj {this.props.match.params.name}. 
                    Dostęp do Twojej todo listy <Link to="/todos">tutaj</Link> lub w panelu u góry.
                </div>
            </>
        )
    }
}

export default WelcomeComponent;
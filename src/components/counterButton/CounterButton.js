import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CounterButton extends Component {

    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }

    // increment = () => {
    //     this.props.incrementMethod(this.props.by)
    // }

    // decrement = () => {
    //     this.props.decrementMethod(this.props.by)
    // }
}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}

export default CounterButton;
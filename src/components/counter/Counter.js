import React, {Component} from 'react';
import './Counter.css';
import CounterButton from '../counterButton/CounterButton';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }

    render() {
        return (
          <div className="Counter">
            <CounterButton by={10} incrementMethod={this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={5} incrementMethod={this.increment} decrementMethod = {this.decrement}/>
            <CounterButton by={1} incrementMethod={this.increment} decrementMethod = {this.decrement}/>
            <div><button onClick={this.reset} className="reset">Reset</button></div>
            <span className="count">{this.state.counter}</span>
          </div>
        )
      }

      increment = (by) => {
          this.setState(
              (previousState) => {
                return {counter : previousState.counter + by}
              }
              )
      }

      decrement = (by) => {
        this.setState(
            (prevState) => {
                return {counter: prevState.counter - by}
            }
        )
      }

      reset = () => {
          this.setState(
                {
                  counter : 0
              }
          )
      }
}

export default Counter;
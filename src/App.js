import React, { Component } from 'react';
import './App.css';
import FirstComponent from './components/learning-components/FirstComponent';
import SecondComponent from './components/learning-components/SecondComponent';
import ThirdComponent from './components/learning-components/ThirdComponent';
import Counter from './components/counter/Counter';
import TodoApp from './components/todo/TodoApp';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoApp/>
      </div>
    )
  }
}



class LearningComponent extends Component {
  render() {
    return (
      <div className="LearningComponent">
        App component
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    )
  }
}


export default App;

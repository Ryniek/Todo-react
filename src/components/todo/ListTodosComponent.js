import React, {Component} from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'

class ListTodosComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message : null
        }
    }

    componentDidMount = () => {
        this.refreshTodos()
    }

    refreshTodos = () => {
        let username = AuthenticationService.getLoggedInUsername()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                this.setState ({
                    todos : response.data
                })
                console.log(response)
            }
        )
    }

    deleteTodoClicked = (id) => {
        let username = AuthenticationService.getLoggedInUsername();
        //console.log(username, id);
         TodoDataService.deleteTodo(username, id)
         .then(
             response => {
                 this.setState({message : `Usunięto todo numer ${id} poprawnie`});
                 this.refreshTodos();
             }
         )
    }

    addTodoClicked = () => {
        this.props.history.push('todos/-1')
    }

    updateTodoClicked = (id) => {
        this.props.history.push(`todos/${id}`)
        // let username = AuthenticationService.getLoggedInUsername();
        // //console.log(username, id);
        //  TodoDataService.deleteTodo(username, id)
        //  .then(
        //      response => {
        //          this.setState({message : `Usunięto todo numer ${id} poprawnie`});
        //          this.refreshTodos();
        //      }
        //  )
    }

    render() {
        return (
        <div>
            <h1>Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Opis</th>
                            <th>Zakończone</th>
                            <th>Termin zakończenia</th>
                            <th>Zaktualizuj</th>
                            <th>Usuń</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                <td><button onClick={() => this.updateTodoClicked(todo.id)} className="btn btn-success">Zaktualizuj</button></td>
                                <td><button onClick={() => this.deleteTodoClicked(todo.id)} className="btn btn-warning">Usuń</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row justify-content-center">
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
            </div>
        </div>
        )
    }
}

export default ListTodosComponent;
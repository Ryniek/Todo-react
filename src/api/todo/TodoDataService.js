import axios from 'axios'

class TodoDataService {

    retrieveAllTodos = (name) => {
        return axios.get(`http://michu-api.herokuapp.com/users/${name}/todos`);
    }

    deleteTodo = (name, id) => {
        return axios.delete(`http://michu-api.herokuapp.com/users/${name}/todos/${id}`)
    }

    retrieveTodo = (name, id) => {
        return axios.get(`http://michu-api.herokuapp.com/users/${name}/todos/${id}`)
    }

    updateTodo = (name, id, todo) => {
        return axios.put(`http://michu-api.herokuapp.com/users/${name}/todos/${id}`, todo)
    }

    saveTodo = (name, todo) => {
        return axios.post(`http://michu-api.herokuapp.com/users/${name}/todos`, todo)
    }
}

export default new TodoDataService();
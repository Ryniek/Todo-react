import axios from 'axios'

class TodoDataService {

    retrieveAllTodos = (name) => {
        return axios.get(`https://michu-api.herokuapp.com/users/${name}/todos`);
    }

    deleteTodo = (name, id) => {
        return axios.delete(`https://michu-api.herokuapp.com/users/${name}/todos/${id}`)
    }

    retrieveTodo = (name, id) => {
        return axios.get(`https://michu-api.herokuapp.com/users/${name}/todos/${id}`)
    }

    updateTodo = (name, id, todo) => {
        return axios.put(`https://michu-api.herokuapp.com/users/${name}/todos/${id}`, todo)
    }

    saveTodo = (name, todo) => {
        return axios.post(`https://michu-api.herokuapp.com/users/${name}/todos`, todo)
    }
}

export default new TodoDataService();
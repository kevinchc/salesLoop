import {HttpClient} from './httpClient';
const API = 'http://localhost:3000/api';
const TODO_API = `${API}/...`;
const createTodo = todo => {
    return HttpClient.post(TODO_API, todo)
};


const getTodo = () => {
    return HttpClient.get(TODO_API)
};


const updateTodo = todo => {
    return HttpClient.put(TODO_API, todo)
};


const removeTodo = todo => {
    return HttpClient.delete(`${TODO_API}/${todo._id}`)
};


const ClientApi = {createTodo, getTodo, updateTodo, removeTodo};

export {ClientApi}
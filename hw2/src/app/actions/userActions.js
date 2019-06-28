import dispatcher from "../dispatcher";
import axios from 'axios';

export function addUser(name, email, phone, website) {
    dispatcher.dispatch({
        type: 'ADD_USER',
        data: { name, email, phone, website }
    })
}

export function getUsers() {
    axios 
    .get('http://jsonplaceholder.typicode.com/users')
    .then(response => {
        dispatcher.dispatch({
            type: 'GET_USERS',
            data: response.data
        });
    });
}

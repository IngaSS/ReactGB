import dispatcher from "../dispatcher";
import { EventEmitter } from 'events';

class userStore extends EventEmitter {
    constructor() {
        super();
        this.users = [];
        this.getUsers = this.getUsers.bind(this);
        this.addUser = this.addUser.bind(this);
        this.handleActions = this.handleActions.bind(this);
        this.change = this.change.bind(this);
    }

    change() {
        this.emit('change');
    }

    getUsers(users) {
        this.users = users;
        this.change();
    }

    addUser(user) {
        this.users = [user, ...this.users];
        this.change();
    }

    handleActions(action) {
        switch(action.type) {
            case 'GET_USERS':
                this.getUsers(action.data)
            case 'ADD_USER': 
                this.addUser(action.data); 
        } 
    }
}

const store = new userStore();
dispatcher.register(store.handleActions);
export default store;

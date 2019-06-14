import React from "react";

class Developer extends React.Component {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        return `Имя: ${this.name}. Возраст: ${this.age}. Дата рождения: ${this.dateOfBirth}`;
    }

    render() {
        return 
    }
}
export default Developer;

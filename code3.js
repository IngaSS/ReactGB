'use strict';

class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name;
        this.age = age;
        this.dateOfBirth = dateOfBirth
    }

    displayInfo() {
        return `Имя: ${this.name}. Возраст: ${this.age}. Дата рождения: ${this.dateOfBirth}`;
    }
}

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary;
        this.department = department;
    }

    displayInfo() {
        return super.displayInfo() + `. Зарплата: ${this.salary}. Отдел: ${this.department}`;
    }
}

class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.manager = '';
    }

    changeManager(manager) {
        this.manager = manager.name;
    }
}

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);
        this.developers = [];
    }

    addEmployee(developer) {
        this.developers.push(developer);
    }

    dropEmployee(developer) {
        this.developers.splice(this.developers.indexOf(developer), 1)
    }
}

let human = new Human('Ivan', 25, '09.06');

console.log(human.displayInfo());

let employee = new Employee('Olga', 25, '09.06', 50000, 'Менеджмент');

console.log(employee.displayInfo());

let developer = new Developer('Elena', 25, '09.06', 50000, 'Менеджмент');

console.log(developer.displayInfo());

let manager = new Manager('Oleg', 25, '09.06', 50000, 'Менеджмент');
console.log(manager.displayInfo());

developer.changeManager(manager);
console.log(developer.manager);
manager.addEmployee(developer);
console.log(manager.developers);

manager.dropEmployee(developer);
console.log(manager.developers);


// Write your code here
module.exports = class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce() {
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}
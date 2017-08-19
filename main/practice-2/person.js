// // Write your code here
// module.exports = Person;

// function Person(id, name, age) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.introduce = function(){
//     return `My name is ${this.name}. I am ${this.age} years old. `;
// }

class Person {
    constructor(name,age,id){
        this.name = name;
        this.age = age;
        this.id = id;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

module.exports = Person;
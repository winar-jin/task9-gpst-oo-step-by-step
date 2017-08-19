// const Person = require('./person');

// module.exports = Student;

// function Student(id,nmae,age,clazz){
//     Student.prototype = new Person(id,name,age);
//     Student.prototype.constructor = Student;
//     this.clazz = clazz;
// }

const Person = require('./person');

class Student extends Person {
    constructor(name, age, clazz, id) {
        super(name, age, id);
        this.clazz = clazz;
    }
    introduce() {
        return `${super.introduce()} I am a Student. I am at Class ${this.clazz.num}.`;
    }
}


module.exports = Student;
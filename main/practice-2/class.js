// // Write your code here
// module.exports = Clazz;

// function Clazz(number) {
//     this.number = number;
// }

// Clazz.prototype.assignLeader = function (student) {
//     this.leader = student.name;
// }

class Class {
    constructor(num){
        this.num = num;
    }
    assignLeader(student){
        this.leader = student.name;
        student.introduce = function(){
            return `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am Leader of Class ${this.clazz.num}.`
        }
    }
    
}

module.exports = Class;
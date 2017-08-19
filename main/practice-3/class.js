// Write your code here
var Teacher = require('./teacher');

module.exports = class Class {
    constructor(num){
        this.num = num;
    }
    appendMember(student){
        student.clazz.num = this.num;
        student.introduce = function () {
            return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am at Class ${this.clazz.num}.`;
        }
        Teacher.notifyStudentAppended(`${student.name} has joined Class ${this.num}`);
        //console.log(`I am ${teacher.name}. I know ${student.name} has joined Class ${student.clazz.num}`);
    }
    assignLeader(student){
        if (student.introduce() === `My name is ${student.name}. I am ${student.age} years old. I am a Student. I am at Class ${student.clazz.num}.`){
            if (student.clazz.num !== this.num){
                return `It is not one of us.`;
            }
            else {
                this.leader = student.name;
                student.introduce = function () {
                    return `My name is ${this.name}. I am ${this.age} years old. I am a Student. I am Leader of Class ${student.clazz.num}.`;
                }
                Teacher.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.num}`);
                return `Assign team leader successfully.`;
                //console.log(`I am ${teacher.name}. I know ${student.name} become Leader of Class ${student.clazz.num}`);
            }
        }
        else return `It is not one of us.`;
    }
    hasStudent(stdent){
        if (stdent.clazz.num === this.num)    return true ;
        else return false;
    }
}
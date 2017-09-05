const Person = require('./person');

class Student extends Person {
  constructor(name, age, clazz) {
    super(name, age);
    this.clazz = clazz;
  }

  introduce() {
    let msg = `I am at Class ${this.clazz.number}.`;
    if (this.clazz.isLeader(this)) {
      msg = `I am Leader of Class ${this.clazz.number}.`;
    }
    return `${super.introduce()} I am a Student. ${msg}`;
  }
}

module.exports = Student;
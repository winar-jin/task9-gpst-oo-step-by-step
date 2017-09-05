const Person = require('./person');

class Teacher extends Person {
  constructor(name, age, clazzes) {
    super(name, age);
    this.clazzes = clazzes;
    this.clazzes.forEach(c => c.assignTeacher(this));
  }

  introduce() {
    let msg = 'I teach No Class';
    if (this.clazzes.length > 0) {
      msg = `I teach Class ${this.clazzes.map(klass => klass.number).join(',')}`;
    }
    return `${super.introduce()} I am a Teacher. ${msg}.`;
  }

  isTeaching(student) {
    return this.clazzes.some(c => c.hasStudent(student));
  }

  notifyStudentAppended(msg) {
    console.log(`I am ${this.name}. ${msg}`);
  }

  notifyLeaderAssigned(msg) {
    console.log(`I am ${this.name}. ${msg}`);
  }
}

module.exports = Teacher;
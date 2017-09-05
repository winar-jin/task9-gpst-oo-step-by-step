const Person = require('./person');

class Teacher extends Person {
  constructor(name, age, clazzes) {
    super(name, age);
    this.clazzes = clazzes;

  }

  introduce() {
    let msg = 'I teach No Class';
    if (this.clazzes.length > 0) {
      msg = `I teach Class ${this.clazzes.map(klass => klass.number).join(',')}`;
    }
    return `${super.introduce()} I am a Teacher. ${msg}.`;
  }
}

module.exports = Teacher;
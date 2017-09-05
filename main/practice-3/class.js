class Clazz {
  constructor(number) {
    this.number = number;
    this.students = [];
    this.teachers = [];
  }
}

Clazz.prototype.assignLeader = function (student) {
  if (this.hasStudent(student)) {
    this.leader = student.name;
    this.teachers.forEach(t => t.notifyLeaderAssigned(`${student.name} become Leader of Class ${this.number}`));
    return `Assign team leader successfully.`;
  }
  return `It is not one of us.`;
};

Clazz.prototype.isLeader = function (student) {
  return this.leader === student.name;
};

Clazz.prototype.appendMember = function (student) {
  this.students.push(student);
  this.teachers.forEach(t => t.notifyStudentAppended(`${student.name} has joined Class ${this.number}`));
};

Clazz.prototype.hasStudent = function (student) {
  return this.students.some(s => s.name === student.name);
};

Clazz.prototype.assignTeacher = function (teacher) {
  this.teachers.push(teacher);
};

module.exports = Clazz;
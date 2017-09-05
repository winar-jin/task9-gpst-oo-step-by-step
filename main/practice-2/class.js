class Clazz {
  constructor(number) {
    this.number = number;
  }
}

Clazz.prototype.assignLeader = function (student) {
  this.leader = student.name;
};

Clazz.prototype.isLeader = function (student) {
  return this.leader === student.name;
};

module.exports = Clazz;
class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  incrAge() {
    return ++this.age;
  }

  increaseSalary() {
    return 1.04 * this.salary;
  }
}

var Sandra = new Employee("sandra", 20, 5000);
// console.log(Sandra.incrAge());
// console.log(Sandra.increaseSalary());

class IT {
  constructor(specialty) {
    this.specialty = specialty;
  }

  changeSpecialty(neww) {
    return (this.specialty = neww);
  }
}

// let newSp = new IT('hello');
// // console.log(newSp.specialty);
// newSp.changeSpecialty('world');
// console.log(newSp.specialty);
// // console.log(newSp.changeSpecialty('world'));

class Sales {
  constructor(commission) {
    this.comm = commission;
  }
}

class Company {
  constructor() {
    this.array = [];
  }

  hire(a) {
    this.array.push(a);
  }
}

let emp = new Employee("sandra", 25, 50000);
let mycomp = new Company();
mycomp.hire(emp);
console.log(mycomp.array);

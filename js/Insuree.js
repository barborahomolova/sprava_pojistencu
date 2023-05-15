"use strict";

class Insuree {
  constructor(firstName, lastName, phoneNumber, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.age = age;
  }
  toString() {
    return `Nový pojištěnec: ${this.firstName} ${this.lastName}`;
  }
  
}

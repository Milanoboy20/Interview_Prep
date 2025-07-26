"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    //constructor
    constructor(id, name, address) {
        this.address = address;
        this.name = name;
        this.id = id;
    }
    Login() {
        return { name: "John", id: 1, email: "" };
    }
    //method
    getNameWithAddress() {
        return `${this.name} stays at ${this.address}`;
    }
}
let john = new Employee(1, "John", "Zone 20");
// john.id = 1;
// john.name = "John";
// john.address = "Zone 20";
console.log(john);
let address = john.getNameWithAddress();
console.log(address);

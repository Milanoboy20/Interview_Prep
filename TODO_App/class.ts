import {Login, User} from './interface';

interface Address {
    street: string;
    pin: string;
}

class Employee implements Login {
    id: number;

    name: string;

    address: string;

    //constructor
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.name = name;
        this.id = id;
    }

    Login() : User {
        return {name: "John", id: 1, email: ""}
    }

    //method
    getNameWithAddress() : string {
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
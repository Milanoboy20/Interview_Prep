

class Employee {
    id: number;

    name: string;

    address: string;

    //constructor
    constructor(id: number, name: string, address: string) {
        this.address = address;
        this.name = name;
        this.id = id;
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
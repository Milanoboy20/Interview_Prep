

export interface User {
    name: string;
    age?: number; //? makes it an optional variable
    id: number;
    email: string;
}

//object destructuring
let {name: username, email: userLogin} : User = {name: "John", id: 1, email: ""};

userLogin = "";

interface Employees extends User {
    salary: number;
}

let employee : Employees = {name: "Mike", id: 2, email: "", salary : 1000}

export interface Login {
    Login() : User;
}

let [user1, user2, ...restUsers]: User[] = [
    {name: "John", id: 1, email: ""},
    {name: "Mike", id: 2, email: ""},
    {name: "James", id: 3, email: ""},
    {name: "James", id: 4, email: ""},
];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result =  restUsers.filter((user) => user.id > 3);
console.log(result);
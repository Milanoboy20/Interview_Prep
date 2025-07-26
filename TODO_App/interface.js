"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//object destructuring
let { name: username, email: userLogin } = { name: "John", id: 1, email: "" };
userLogin = "";
let employee = { name: "Mike", id: 2, email: "", salary: 1000 };
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "" },
    { name: "Mike", id: 2, email: "" },
    { name: "James", id: 3, email: "" },
    { name: "James", id: 4, email: "" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter((user) => user.id > 3);
console.log(result);

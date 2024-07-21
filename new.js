"use strict";
//  structural typing
Object.defineProperty(exports, "__esModule", { value: true });
let teacher = {
    name: "Erum Sikander",
    age: 26,
    exp: 10
};
let student = {
    name: "waseema",
    age: 20
};
student = teacher;
//  teacher = student  error because i did not exp assign in student objects.!
console.log(student);
console.log(teacher);

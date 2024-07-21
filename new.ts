//  structural typing

type ITeacher = 
{
    name : string,
    age : number,
    exp : number,
}

let teacher : ITeacher = 
{
    name : "Erum Sikander",
    age : 26,
    exp : 10
}
type ITstudent = 
{
    name : string,
    age : number
}

let student : ITstudent = 
{
    name : "waseema",
    age : 20
}
  student = teacher
// its value can't change from student because 1 error is i did not add exp in student object

console.log(student);
console.log(teacher);   

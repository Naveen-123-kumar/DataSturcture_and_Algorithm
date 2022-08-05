class Employee{
    constructor(id,name,salary){
        this.id=id,
        this.name=name,
        this.salary=salary
    }
    printDetails(){
        return this.id + this.name + this.salary
    }
}

class Student extends Employee{
    constructor(id,name,salary,brach,place){
        super(id,name,salary);
        this.brach=brach
        this.place=place
    }
    StudentDetails(){
        return (super.printDetails() + this.brach+ this.place);
    }
}
let e1=new Student(1,"Naveen",20000,"CSE","Mahua")
console.log(e1.StudentDetails())




// class person{
//     constructor(name){
//         this.name = name;
//     }
//     //method to return the string
//     toString(){
//         return (`Name of person: ${this.name}`);
//     }
// }
// class student extends person{
//     constructor(name,id){
//         //super keyword to for calling above class constructor
//         super(name);
//         this.id = id;
//     }
//     toString(){
//         return (`${super.toString()},Student ID: ${this.id}`);
//     }
// }
// let student1 = new student('Mukul',22);
// console.log(student1.toString());
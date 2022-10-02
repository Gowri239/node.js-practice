console.log('Hello world')
const multiply = (a,b) => a*b

console.log(multiply(5,6))
//multiply(5,6);

const student = {
    Name : 'Gowri',
    Id : 565,
    Marks: 567,
    greet(){
        console.log(`Hello I am ${this.Name}`)
    }
}

//console.log(student.greet());
student.greet()
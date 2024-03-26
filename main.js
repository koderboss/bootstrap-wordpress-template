const animals = ['cat', 'dog', 'rabbit'];

// animals.forEach((e)=>{
//   console.log(e)
// })

const Person = {
  name: 'John',
    age: 30,
    greet() {
        return `Hello, I am ${this.name}!`;
    }
}

console.log(Person.greet());

let number = 10;
while(number > 0){
  console.log(number);
  number--;
}
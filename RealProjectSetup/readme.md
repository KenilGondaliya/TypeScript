In TypeScript, public and private are access modifiers used to control the visibility of class members (properties and methods).

1. public:

By default, all class members are public in TypeScript.
A public member can be accessed from anywhere, both inside and outside the class.

class Person {
public name: string;

constructor(name: string) {
this.name = name;
}

public greet() {
console.log(`Hello, my name is ${this.name}`);
}
}

const person = new Person('John');
console.log(person.name); // Accessible
person.greet(); // Accessible

2. private:

A private member can only be accessed within the class where it is defined.
It is not accessible from outside the class, which helps with encapsulation and maintaining internal state.

class Person {
private name: string;

constructor(name: string) {
this.name = name;
}

public greet() {
console.log(`Hello, my name is ${this.name}`);
}
}

const person = new Person('John');
// console.log(person.name); // Error: 'name' is private and only accessible within class 'Person'.
person.greet(); // Accessible

3. protected

A protected member is similar to private, but it can also be accessed in derived (sub) classes. It cannot be accessed from outside the class or derived class instances.

typescript
Copy
Edit

class Person {
protected name: string;

constructor(name: string) {
this.name = name;
}   
}

class Employee extends Person {
public greet() {
console.log(`Hello, my name is ${this.name}`);
}
}

const employee = new Employee('John');
employee.greet(); // Accessible within derived class
// console.log(employee.name); // Error: 'name' is protected and only accessible within class 'Person' and its subclasses.


If I used Setter in set then not use void()
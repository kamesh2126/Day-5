class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    updateEmail(newEmail) {
        this.email = newEmail;
    }

    updateAge(newAge) {
        this.age = newAge;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
    }
}


let person1 = new Person("Arunachalam",22, "Arunachalam2125@gmail.com");

console.log(person1.getDetails());

person1.updateEmail("kameshbabu63@gmail.com.");
person1.updateAge(23);

console.log(person1.getDetails());
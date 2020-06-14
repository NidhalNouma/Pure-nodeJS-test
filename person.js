
(function (exports, require, module, __filename, __dirname) {  


});

const person = {
    name: "nidhal",
    age: "25"
}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getPerson() {
        console.log(`my name is ${this.name} and my age is ${this.age}`)
    }
}

module.exports = Person
class person {
    constructor (firstName,lastName,age,place){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.place=place;
    }

getDetails(){
    return(`The name of the person is ${this.firstName}${this.lastName} with the age of${this.age} born at ${this.place}`)
}
}
let person1=new person("Guvi ","class","25","chennai");
console.log(person1.getDetails());
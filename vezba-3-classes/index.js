class Car {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }

    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car ("VW Passat B5.5", "2003");

document.getElementById("demo").textContent = `My car, ${myCar.name}, is ${myCar.age(year)} years old.`
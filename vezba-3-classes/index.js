class Car {
    constructor (name, year) {
        this.name = name;
        this.year = year;
    }

    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car ("VW Passat B5.5", "2003");

document.getElementById("demo").textContent = `My car, ${myCar.name}, is ${myCar.age()} years old.`
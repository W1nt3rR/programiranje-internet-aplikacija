class Automobile {
	constructor(name, numOfDoors, displacement, age, price) {
		this.name = name;
		this.numOfDoors = numOfDoors;
		this.displacement = displacement;
		this.age = age;
		this.price = price;
	}
}

class VehicleList {
	constructor(parentID) {
		this.parentID = parentID;
		this.vehicles = [];
	}

	addVehicle(name, numOfDoors, displacement, age, price) {
		this.vehicles.push(
			new Automobile(name, numOfDoors, displacement, age, price)
		);
	}

	addExistingVehicle(vehicle) {
		this.vehicles.push(vehicle);
	}

	sortByPrice(ascending) {
		ascending
			? this.vehicles.sort((a, b) => a.price - b.price)
			: this.vehicles.sort((a, b) => b.price - a.price);
		this.render();
	}

	sortByAge(ascending) {
		ascending
			? this.vehicles.sort((a, b) => a.age - b.age)
			: this.vehicles.sort((a, b) => b.age - a.age);
		this.render();
	}

	render() {
		const parent = document.getElementById(this.parentID);
		parent.innerHTML = "";

		this.vehicles.forEach((vehicle) => {
			const row = document.createElement("tr");

			row.innerHTML = `
				<td>${vehicle.name}</td>
				<td>${vehicle.numOfDoors}</td>
				<td>${vehicle.displacement} cc</td>
				<td>${vehicle.age}</td>
				<td>$${vehicle.price}</td>
				<td><button>Details</button></td>
			`;

			parent.appendChild(row);
		});
	}
}

const vehicles = new VehicleList("parent");

const vw = new Automobile("VW Passat B 5.5", 4, 1896, 2003, 4000);
const vw2 = new Automobile("VW Golf 5", 4, 1896, 2019, 5000);
const vw3 = new Automobile("VW Tiguan", 4, 1896, 2010, 6996);
const vw4 = new Automobile("VW Touareg", 4, 1896, 2000, 1234);
const bmw = new Automobile("BMW X5", 4, 2500, 2002, 3000);

vehicles.addExistingVehicle(vw);
vehicles.addExistingVehicle(bmw);
vehicles.addExistingVehicle(vw2);
vehicles.addExistingVehicle(vw3);
vehicles.addExistingVehicle(vw4);

vehicles.render();

const getOrder = () => {
	const order = document.getElementById("order").value;
	if (order === "true") return true;
	else return false;
};

document
	.getElementById("AgeButton")
	.addEventListener("click", () => vehicles.sortByAge(getOrder()));

document
	.getElementById("PriceButton")
	.addEventListener("click", () => vehicles.sortByPrice(getOrder()));

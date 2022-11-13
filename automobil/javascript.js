class Automobile {
	constructor(parentID, naziv, brojVrata, kubikaza, godiste, cena) {
		this.naziv = naziv;
		this.brojVrata = brojVrata;
		this.kubikaza = kubikaza;
		this.godiste = godiste;
		this.cena = cena;
		this.parentID = parentID;
	}

	setTableParent(parentID) {
		this.parentID = parentID;
	}

	render() {
		const parent = document.getElementById(this.parentID);

		const row = document.createElement("tr");

		row.innerHTML = `
            <td>${this.naziv}</td>
            <td>${this.brojVrata}</td>
            <td>${this.kubikaza} cc</td>
            <td>${this.godiste}</td>
            <td>$${this.cena}</td>
            <td><button>Detalji</button></td>
        `;

		parent.appendChild(row);
	}
}

const vw = new Automobile("parent", "VW Passat B 5.5", 4, 1896, 2003, 4000);
const bmw = new Automobile("parent", "BMW X5", 4, 2500, 2002, 3000);

vw.render();
bmw.render();

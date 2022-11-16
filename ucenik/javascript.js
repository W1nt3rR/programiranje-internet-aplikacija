class Student {
	constructor(name, year, subjects) {
		this.name = name;
		this.year = year;
		this.subjects = subjects;
	}

	addSubject(subject) {
		this.subjects.push(subject);
	}
}

class Students {
	constructor(parentID) {
		this.parentID = parentID;
		this.students = [];
	}

	addStudent(student) {
		this.students.push(student);
	}

	render() {
		const parent = document.getElementById(this.parentID);
		parent.innerHTML = "";

		this.students.map((student) => {
			let card = document.createElement("div");
			card.classList.add("card");

			card.innerHTML = `
				<div class="cardLeft">
					<div>
						<p>Ime i Prezime: ${student.name}</p>
					</div>
					<div>
						<p>Razred: ${student.year}</p>
					</div>
					<div class="filler">
						${student.subjects.map((subject) => {
							return `<p>${subject.Subject}: ${subject.Grade}</p>`;
						})}
					</div>
				</div>
				<div class="cardRight">
					<img src="" alt="">
				</div>
            `;
			parent.appendChild(card);
		});
	}
}

const student1 = new Student("Ramzes Frost", 3, [
	{
		Subject: "Programiranje Internet Apliakcija",
		Grade: 10,
	},
	{
		Subject: "Programiranje",
		Grade: 10,
	},
	{
		Subject: "Softversko Inzenjerstvo",
		Grade: 9,
	},
]);

const student2 = new Student("Amelius Tule", 3, [
	{
		Subject: "Programiranje Internet Apliakcija",
		Grade: 10,
	},
	{
		Subject: "Osnovi Elektrotehnike",
		Grade: 10,
	},
]);

const students = new Students("content");
students.addStudent(student1);
students.addStudent(student2);

students.render();

class Student {
    constructor(index, name, surname, year, major, pictures) {
        this.index = index;
        this.name = name;
        this.surname = surname;
        this.year = year;
        this.major = major;
        this.pictures = pictures;
    }

    render (id) {
        let parent = document.getElementById(id)

        if (!parent) throw new Exception("Parent element does not exist");

        let element = document.createElement("div");

        element.innerHTML = `
            <div class="student">
                <h1>${this.name} ${this.surname}</h1>
                <h2>${this.index} / ${this.year}</h2>
                <h2>${this.major}</h2>
                <div class="pictures">
                    ${this.pictures.map((image) => {
                        return `<img src="${image}"></img>`
                    })}
                </div>
            </div>
        `

        parent.appendChild(element);
    }
}

let pictures = ["./wallpapers/wallhaven-2e3x6m.png", "./wallpapers/wallhaven-2e3x6m.png"];

let student1 = new Student(123456, "Ramiz", "Sabovic", 3, "Softversko Inzenjerstvo", pictures);

student1.render("content");
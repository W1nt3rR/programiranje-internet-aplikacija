
const alertFn = () => {
    alert("Welcome to my world!");
}

const changeColor = () => {
    const par = document.getElementById("par1");
    par.style.color = "red";
    setTimeout(() => {
        par.style.color = "orange";
    }, 1000)
}

const par = document.getElementById("par1");
par.style.color = "orange";

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

const changeImage = () => {
    const img = document.getElementById("wallpaper");
    img.src = "images/wallhaven-2.jpg"
    setTimeout(() => {
        img.src = "images/wallhaven-1.jpg"
    }, 1000)
}

const par = document.getElementById("par1");
par.style.color = "orange";
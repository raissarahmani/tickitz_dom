const toDashboard = document.querySelector("nav p:first-of-type")
toDashboard.addEventListener("click", () => {
    location.href = "admin.html"
})

const toMovie = document.querySelector("nav p:last-of-type")
toMovie.addEventListener("click", () => {
    location.href = "admin2.html"
})

const addMovie = document.querySelector(".list div button")
addMovie.addEventListener("click", (e) => {
    e.preventDefault()
    location.href = "admin3.html"
})

const table = document.querySelector(".list table")
const tableList = document.querySelectorAll(".list table tr")
tableList.forEach((list) => {
    const btnDelete = list.querySelector("td:last-child img:last-of-type")
    if (btnDelete) {
        btnDelete.addEventListener("click", (e) => {
            e.preventDefault()
            list.remove()
        })
    }
})

const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector("header>:last-child>img")
mobileMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
})

const dashboard = document.querySelector(".hamburger-menu>nav>p:first-of-type")
dashboard.addEventListener("click", () => {
    location.href = "admin.html"
}, false)

const movie = document.querySelector(".hamburger-menu>nav>p:nth-of-type(2)")
movie.addEventListener("click", () => {
    location.href = "admin2.html"
}, false)
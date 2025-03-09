const toHome = document.querySelector("nav>p:first-of-type")
toHome.addEventListener("click", () => {
    location.href = "../index.html"
}, false)

const toMovie = document.querySelector("nav>p:nth-of-type(2)")
toMovie.addEventListener("click", () => {
    location.href = "home2.html"
}, false)

const toBuyTicket = document.querySelector("nav>p:nth-of-type(3)")
toBuyTicket.addEventListener("click", () => {
    location.href = "detail.html"
}, false)

const toProfile = document.querySelector(".account>:last-child>img")
toProfile.addEventListener("click", () => {
    location.href = "profile.html"
}, false)

const setting = document.querySelector(".option p:first-of-type")
setting.addEventListener("click", () => {
    location.href = "profile.html"
})

const history = document.querySelector(".option p:last-of-type")
history.addEventListener("click", () => {
    location.href = "history.html"
})

const detailNow = document.querySelector(".history-now")
const showDetailNow = document.querySelector("#dropdown")
showDetailNow.addEventListener("click", () => {
    detailNow.classList.toggle("active")
})

const detailPast = document.querySelector(".history-past")
const showDataPast = document.querySelectorAll(".dropdown")
showDataPast.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        detailPast.classList.toggle("active")
    })
})

const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector("header>:last-child>img")
mobileMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
})

const home = document.querySelector(".hamburger-menu>nav>p:first-of-type")
home.addEventListener("click", () => {
    location.href = "../index.html"
}, false)

const movie = document.querySelector(".hamburger-menu>nav>p:nth-of-type(2)")
movie.addEventListener("click", () => {
    location.href = "home2.html"
}, false)

const buyTicket = document.querySelector(".hamburger-menu>nav>p:nth-of-type(3)")
buyTicket.addEventListener("click", () => {
    location.href = "detail.html"
}, false)

const profile = document.querySelector(".hamburger-menu>nav>p:nth-of-type(4)")
profile.addEventListener("click", () => {
    location.href = "profile.html"
}, false)
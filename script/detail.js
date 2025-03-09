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

const toSignIn = document.querySelector(".buttons>button:first-of-type")
toSignIn.addEventListener("click", () => {
    location.href = "signin.html"
}, false)

const toSignUp = document.querySelector(".buttons>button:last-of-type")
toSignUp.addEventListener("click", () => {
    location.href = "signup.html"
}, false)

const date = document.querySelector(".book>:nth-child(2)>div:first-of-type>div>input")
const time = document.querySelector(".book>:nth-child(2)>div:nth-of-type(2)>div>input")
const loc = document.querySelector(".book>:nth-child(2)>div:nth-of-type(3)>div>select")
const cinemas = document.querySelectorAll("input[name='cinema']")
const btnBook = document.querySelector(".cinema>div:last-of-type>button")

btnBook.addEventListener("click", (e) => {
    e.preventDefault()

    const dateMsg = document.querySelector(".book>:nth-child(2)>div:first-of-type>p")
    const timeMsg = document.querySelector(".book>:nth-child(2)>div:nth-of-type(2)>p")
    const locMsg = document.querySelector(".book>:nth-child(2)>div:nth-of-type(3)>p")
    const cinemaMsg = document.querySelector(".cinema>p")

    if (!date.value) {
        dateMsg.style.visibility = "visible"
    } else {
        dateMsg.style.visibility = "hidden"
    }

    if (!time.value) {
        timeMsg.style.visibility = "visible"
    } else {
        timeMsg.style.visibility = "hidden"
    }

    if (!loc.value) {
        locMsg.style.visibility = "visible"
    } else {
        locMsg.style.visibility = "hidden"
    }

    let cinemaSelected = false
    for (let cinema of cinemas) {
        if (cinema.checked) {
            cinemaSelected = true
            break
        }
    }
    if (cinemaSelected === false) {
        cinemaMsg.style.visibility = "visible"
        return
    } else {
        cinemaMsg.style.visibility = "hidden"
    }

    location.href = "order.html"
})

const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector("header div:last-child img")
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

const signIn = document.querySelector(".hamburger-menu>nav>p:nth-of-type(4)")
signIn.addEventListener("click", () => {
    location.href = "signin.html"
}, false)

const signUp = document.querySelector(".hamburger-menu>nav>p:nth-of-type(5)")
signUp.addEventListener("click", () => {
    location.href = "signup.html"
}, false)
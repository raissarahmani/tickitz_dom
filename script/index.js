const toHome = document.querySelector("nav>p:first-of-type")
toHome.addEventListener("click", () => {
    location.href = "index.html"
}, false)

const toMovie = document.querySelector("nav>p:nth-of-type(2)")
toMovie.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)

const toBuyTicket = document.querySelector("nav>p:nth-of-type(3)")
toBuyTicket.addEventListener("click", () => {
    location.href = "./pages/detail.html"
}, false)

const toSignIn = document.querySelector(".buttons>button:first-of-type")
toSignIn.addEventListener("click", () => {
    location.href = "./pages/signin.html"
}, false)

const toSignUp = document.querySelector(".buttons>button:last-of-type")
toSignUp.addEventListener("click", () => {
    location.href = "./pages/signup.html"
}, false)

const detailMovie = document.querySelectorAll(".detail :first-child")
detailMovie.forEach((detail) => {
    detail.addEventListener("click", () => {
        location.href = "./pages/detail.html"
    }, false)
})

const viewAll = document.querySelector(".viewall")
viewAll.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)

const nameNl = document.querySelector("input[name='firstname']")
const email = document.querySelector("input[name='email']")
const btnNewsletter = document.querySelector(".newsletter form button")
const newsletterMsg = document.querySelector(".container-news p span")

btnNewsletter.addEventListener("click", (e) => {
    e.preventDefault()

    if (!nameNl.value || !email.value) {
        newsletterMsg.style.visibility = "visible"
        newsletterMsg.style.backgroundColor = "red"
        newsletterMsg.textContent = "Data should be filled"
        return
    }

    if (!email.value.includes("@")) {
        newsletterMsg.style.visibility = "visible"
        newsletterMsg.style.backgroundColor = "red"
        newsletterMsg.textContent = "Email not valid"
        return
    } else {
        newsletterMsg.style.visibility = "hidden"
    }

    newsletterMsg.style.visibility = "visible"
    newsletterMsg.style.backgroundColor = "green"
    newsletterMsg.textContent = "Thank you! you will hear news about us soon"
})

const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector("header div:last-child img")
mobileMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
})

const home = document.querySelector(".hamburger-menu>nav>p:first-of-type")
home.addEventListener("click", () => {
    location.href = "index.html"
}, false)

const movie = document.querySelector(".hamburger-menu>nav>p:nth-of-type(2)")
movie.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)

const buyTicket = document.querySelector(".hamburger-menu>nav>p:nth-of-type(3)")
buyTicket.addEventListener("click", () => {
    location.href = "./pages/detail.html"
}, false)

const signIn = document.querySelector(".hamburger-menu>nav>p:nth-of-type(4)")
signIn.addEventListener("click", () => {
    location.href = "./pages/signin.html"
}, false)

const signUp = document.querySelector(".hamburger-menu>nav>p:nth-of-type(5)")
signUp.addEventListener("click", () => {
    location.href = "./pages/signup.html"
}, false)
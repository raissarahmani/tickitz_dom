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

const signIn = document.querySelector(".buttons>button:first-of-type")
signIn.addEventListener("click", () => {
    location.href = "signin.html"
}, false)

const signUp = document.querySelector(".buttons>button:last-of-type")
signUp.addEventListener("click", () => {
    location.href = "signup.html"
}, false)

const nextPage = document.querySelector(".ticket-button button:last-of-type")
nextPage.addEventListener("click", () => {
    location.href = "profile.html"
})
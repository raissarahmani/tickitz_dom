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

const detailMovie = document.querySelectorAll(".detail :first-child")
detailMovie.forEach((detail) => {
    detail.addEventListener("click", () => {
        location.href = "detail.html"
    }, false)
})

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
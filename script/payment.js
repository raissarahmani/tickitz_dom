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

const fullName = document.querySelector("input[name='name']")
const email = document.querySelector("input[name='email']")
const phone = document.querySelector("input[name='phone']")
const paymentMethod = document.querySelectorAll("input[name='pay']")
const btnPay = document.querySelector(".method button")

btnPay.addEventListener("click", (e) => {
    e.preventDefault()

    const nameMsg = document.querySelector(".personal-info>form>p:first-of-type")
    const emailMsg = document.querySelector(".personal-info>form>p:nth-of-type(2)")
    const phoneMsg = document.querySelector(".personal-info>form>p:last-of-type")
    const paymentMsg = document.querySelector(".method>p:last-of-type")

    if (!fullName.value) {
        nameMsg.style.visibility = "visible"
    } else {
        nameMsg.style.visibility = "hidden"
    }

    if (!email.value) {
        emailMsg.style.visibility = "visible"
    } else {
        emailMsg.style.visibility = "hidden"
    }

    if (!phone.value) {
        phoneMsg.style.visibility = "visible"
    } else {
        phoneMsg.style.visibility = "hidden"
    }

    let name = true
    for (let letter of fullName.value) {
        if (!isNaN(letter)) {
            name = false
        }
    }
    if (!name) {
        nameMsg.style.visibility = "visible"
        nameMsg.textContent = "Name should only contain letters"
        return
    }

    if (email.value.length > 0 && !email.value.includes("@")) {
        emailMsg.style.visibility = "visible"
        emailMsg.textContent = "Email not valid"
        return
    }

    let phoneNum = true
    for (let char of phone.value) {
        if (isNaN(char)) {
            phoneNum = false
        }
    }
    if (!phoneNum) {
        phoneMsg.style.visibility = "visible"
        phoneMsg.textContent = "Phone should only in numbers"
    }

    let paymentSelected = false
    for (let method of paymentMethod) {
        if (method.checked) {
            paymentSelected = true
            break
        }
    }
    if (paymentSelected === false) {
        paymentMsg.style.visibility = "visible"
        return
    } else {
        paymentMsg.style.visibility = "hidden"
    }

    const popupContainer = document.querySelector(".popup-container")
    const popupPayment = document.querySelector(".popup")
    if (popupContainer && popupPayment) {
        popupContainer.style.visibility = "visible"
        popupPayment.style.visibility = "visible"
    }
    
    const btnCheckPayment = document.querySelector(".popup>:last-child>:first-child")
    btnCheckPayment.addEventListener("click", () => {
        location.href = "success.html"
    })

    const btnPayLater = document.querySelector(".popup>:last-child>:last-child")
    btnPayLater.addEventListener("click", () => {
        popupContainer.style.visibility = "hidden"
        popupPayment.style.visibility = "hidden"
    })
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
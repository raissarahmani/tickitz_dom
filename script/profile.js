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

const btnUpdt = document.querySelector("main>div>button")
const editProfile = document.querySelector(".info>:last-child>:nth-child(4)")
editProfile.addEventListener("click", () => {

    const detailAcc = document.querySelector(".detail")
    const privacyInfo = document.querySelector(".privacy")
    const infoAcc = document.querySelector(".info")
    infoAcc.style.display = "none"
    detailAcc.style.display = "block"
    privacyInfo.style.display = "block"
    btnUpdt.style.display = "block"
})

const firstName = document.querySelector("input[name='firstname']")
const lastName = document.querySelector("input[name='lastname']")
const email = document.querySelector("input[name='email']")
const phone = document.querySelector("input[name='phone']")
const newPass = document.querySelector("input[name='newpass']")
const confirmPass = document.querySelector("input[name='confirm']")
btnUpdt.addEventListener("click", (e) => {
    e.preventDefault()

    const firstNameMsg = document.querySelector(".detail form>:first-child>p")
    const lastNameMsg = document.querySelector(".detail form>:nth-child(2)>p")
    const emailMsg = document.querySelector(".detail form>:nth-child(3)>p")
    const phoneMsg = document.querySelector(".detail form>:nth-child(4)>p")
    const newPassMsg = document.querySelector(".privacy form>:first-child>p")
    const confirmMsg = document.querySelector(".privacy form>:nth-child(2)>p")

    if (!firstName.value) {
        firstNameMsg.style.visibility = "visible"
    } else {
        firstNameMsg.style.visibility = "hidden"
    }

    if (!lastName.value) {
        lastNameMsg.style.visibility = "visible"
    } else {
        lastNameMsg.style.visibility = "hidden"
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

    let firstNameCheck = true
    for (let letter of firstName.value) {
        if (!isNaN(letter)) {
            firstNameCheck = false
        }
    }
    if (!firstNameCheck) {
        firstNameMsg.style.visibility = "visible"
        firstNameMsg.textContent = "Name should only contain letters"
        return
    }

    let lastNameCheck = true
    for (let letter of lastName.value) {
        if (!isNaN(letter)) {
            lastNameCheck = false
        }
    }
    if (!lastNameCheck) {
        lastNameMsg.style.visibility = "visible"
        lastNameMsg.textContent = "Name should only contain letters"
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
        return
    }

    if (newPass.value.length < 8) {
        newPassMsg.style.visibility = "visible"
        newPassMsg.textContent = "Password should at least has 8 characters"
        return
    }

    let alphabetPass = newPass.value.toLowerCase() !== newPass.value.toUpperCase()
    if (alphabetPass === false) {
        newPassMsg.style.visibility = "visible"
        newPassMsg.textContent = "Password should be a combination of letter and number"
        return
    }

    let numPass = false
    for (let num of newPass.value) {
        if (!isNaN(num)) {
            numPass = true
        }
    }
    if (!numPass) {
        newPassMsg.style.visibility = "visible"
        newPassMsg.textContent = "Password should be a combination of letter and number"
    }

    if (newPass.value !== confirmPass.value) {
        confirmMsg.style.visibility = "visible"
        return
    }

    newPassMsg.style.visibility = "hidden"
    confirmMsg.style.visibility = "hidden"

    alert("Update success")

})

const showNewPass = document.querySelector(".privacy form>div:first-of-type img")
showNewPass.addEventListener ("click", () => {
    if (newPass.type === "password") {
        newPass.type = "text"
    } else {
        newPass.type = "password"
    }
})

const showConfirmPass = document.querySelector(".privacy form>div:last-of-type img")
showConfirmPass.addEventListener ("click", () => {
    if (confirmPass.type === "password") {
        confirmPass.type = "text"
    } else {
        confirmPass.type = "password"
    }
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

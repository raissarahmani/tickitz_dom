const email = document.querySelector("input[name='email']")
const pass = document.querySelector("input[name='password']")
const btnLogin = document.querySelector("form button")
const btnMsg = document.querySelector("form p:last-of-type")

btnLogin.addEventListener("click", (e) => {
    e.preventDefault()
    
    const emailMsg = document.querySelector("form p:first-of-type")
    const passMsg = document.querySelector("form p:nth-of-type(2)")

    if (!email.value) {
        emailMsg.style.visibility = "visible"
        emailMsg.textContent = "Data must be filled"
    } else {
        emailMsg.style.visibility = "hidden"
    }

    if (!pass.value) {
        passMsg.style.visibility = "visible"
        passMsg.textContent = "Data must be filled"
        return
    } else {
        passMsg.style.visibility = "hidden"
    }

    if (!email.value.includes("@")) {
        emailMsg.style.visibility = "visible"
        emailMsg.textContent = "Email not valid"
        return
    }

    if (pass.value.length < 8) {
        passMsg.style.visibility = "visible"
        passMsg.textContent = "Password should at least has 8 characters"
        return
    }

    let alphabetPass = pass.value.toLowerCase() !== pass.value.toUpperCase()
    if (alphabetPass === false) {
        passMsg.style.visibility = "visible"
        passMsg.textContent = "Password should contain letter"
        return
    }

    let numPass = false
    for (let num of pass.value) {
        if (!isNaN(num)) {
            numPass = true
        }
    }
    if (!numPass) {
        passMsg.style.visibility = "visible"
        passMsg.textContent = "Password should contain number"
        return
    }

    if (email.value === "test@admin.com" && pass.value === "1234test") {
        location.href = "admin.html"
        return
    }

    const registeredUser = JSON.parse(localStorage.getItem("user"))
    if (email.value === registeredUser.emailValue && pass.value === registeredUser.passValue) {
        alert("Login success")
        location.href = "../index.html"
    } else if (email.value === registeredUser.emailValue) {
        alert("Incorrect email and password")
    } else {
        alert("User not registered. Please sign up")
    }

})

const showPass = document.querySelector("form div img")
showPass.addEventListener ("click", () => {
    if (pass.type === "password") {
        pass.type = "text"
    } else {
        pass.type = "password"
    }
})

const loginGoogle = document.querySelector(".socmed div:first-of-type img")
loginGoogle.addEventListener("click", () => {
    location.href = "https://www.google.com/login"
}, false)

const loginFb = document.querySelector(".socmed div:last-of-type img")
loginFb.addEventListener("click", () => {
    location.href = "https://www.facebook.com/login"
}, false)
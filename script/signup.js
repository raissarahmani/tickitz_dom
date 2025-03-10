const email = document.querySelector("input[name='email']")
const pass = document.querySelector("input[name='password']")
const tnc = document.getElementById("tnc")
const btnRegister = document.querySelector("form button")

btnRegister.addEventListener("click", (e) => {
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

    const tncMsg = document.querySelector("form p:nth-of-type(3)")
    if (!tnc.checked && innerWidth > 767) {
        tncMsg.style.visibility = "visible"
        return
    }

    alert("Register success. Please sign in")
    location.href = "signin.html"
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
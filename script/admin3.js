const toDashboard = document.querySelector("nav p:first-of-type")
toDashboard.addEventListener("click", () => {
    location.href = "admin.html"
})

const toMovie = document.querySelector("nav p:last-of-type")
toMovie.addEventListener("click", () => {
    location.href = "admin2.html"
})

const posterFile = document.querySelector("input[name='upload']")
const movieName = document.querySelector("input[name='name']")
const category = document.querySelector("input[name='category']")
const released = document.querySelector("input[name='releaseDate']")
const duration = document.querySelectorAll("input[name='duration']")
const directorName = document.querySelector("input[name='director']")
const castName = document.querySelector("input[name='cast']")
const synopsis = document.querySelector("textarea[name='synopsis']")
const loc = document.querySelector("select[name='loc']")
const date = document.querySelector("input[name='date']")
const btnSave = document.querySelector(".add-movie>button")

btnSave.addEventListener("click", (e) => {
    e.preventDefault()

    const fileMsg = document.querySelector("form p:first-of-type")
    const nameMsg = document.querySelector("form p:nth-of-type(2)")
    const categoryMsg = document.querySelector("form p:nth-of-type(3)")
    const releasedMsg = document.querySelector("form div div:first-of-type p")
    const durationMsg = document.querySelector("form div div:last-of-type p")
    const directorMsg = document.querySelector("form p:nth-of-type(4)")
    const castMsg = document.querySelector("form p:nth-of-type(5)")
    const synopsisMsg = document.querySelector("form p:nth-of-type(6)")
    const locMsg = document.querySelector("form p:nth-of-type(7)")
    const dateMsg = document.querySelector("form p:nth-of-type(8)")
    const success = document.querySelector(".add-movie>p:last-of-type")

    if (!posterFile.value) {
        fileMsg.style.visibility = "visible"
    } else {
        fileMsg.style.visibility = "hidden"
    }

    if (!movieName.value) {
        nameMsg.style.visibility = "visible"
    } else {
        nameMsg.style.visibility = "hidden"
    }

    if (!category.value) {
        categoryMsg.style.visibility = "visible"
    } else {
        categoryMsg.style.visibility = "hidden"
    }

    if (!released.value) {
        releasedMsg.style.visibility = "visible"
    } else {
        releasedMsg.style.visibility = "hidden"
    }

    let durationCheck = true
    duration.forEach((item) => {
        if (isNaN(item.value)) {
            durationCheck = false
        }
    })
    if (!durationCheck) {
        durationMsg.style.visibility = "visible"
        durationMsg.textContent = "Input should only contain number"
    } else {
        durationMsg.style.visibility = "hidden"
    }
    

    if (!directorName.value) {
        directorMsg.style.visibility = "visible"
    } else {
        directorMsg.style.visibility = "hidden"
    }

    let directorNameCheck = true
    for (let letter of directorName.value) {
        if (!isNaN(letter) && letter !== " ") {
            directorNameCheck = false
        }
    }
    if (!directorNameCheck) {
        directorMsg.style.visibility = "visible"
        directorMsg.textContent = "Name should only contain letters"
    } else {
        directorMsg.style.visibility = "hidden"
    }

    if (!castName.value) {
        castMsg.style.visibility = "visible"
    } else {
        castMsg.style.visibility = "hidden"
    }

    if (!synopsis.value) {
        synopsisMsg.style.visibility = "visible"
    } else {
        synopsisMsg.style.visibility = "hidden"
    }

    if (!loc.value) {
        locMsg.style.visibility = "visible"
    } else {
        locMsg.style.visibility = "hidden"
    }

    if (!date.value) {
        dateMsg.style.visibility = "visible"
        return
    } else {
        dateMsg.style.visibility = "hidden"
    }

    alert("New movie added!")

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
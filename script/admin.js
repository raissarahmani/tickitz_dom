const toDashboard = document.querySelector("nav p:first-of-type")
toDashboard.addEventListener("click", () => {
    location.href = "admin.html"
})

const toMovie = document.querySelector("nav p:last-of-type")
toMovie.addEventListener("click", () => {
    location.href = "admin2.html"
})

const chooseMovie = document.querySelector("select[name='movies']")
const periode = document.querySelector("select[name='periode']")
const formSales = document.querySelector(".sales-chart>:first-child>form")
formSales.addEventListener("submit", (e) => {
    e.preventDefault()

    const movieMsg = document.querySelector(".sales-chart>:first-child>form>div:first-of-type>p")
    const periodeMsg = document.querySelector(".sales-chart>:first-child>form>div:nth-of-type(2)>p")
    if (!chooseMovie.value) {
        movieMsg.style.visibility = "visible"
    } else {
        movieMsg.style.visibility = "hidden"
    }

    if (!periode.value) {
        periodeMsg.style.visibility = "visible"
    } else {
        periodeMsg.style.visibility = "hidden"
    }

    const title = document.querySelector(".sales-chart>.graph>p")
    title.textContent = chooseMovie.value
})

const category = document.querySelector("select[name='category']")
const loc = document.querySelector("select[name='location']")
const formTicket = document.querySelector(".ticket-sales form")
formTicket.addEventListener("submit", (e) => {
    e.preventDefault()

    const categoryMsg = document.querySelector(".ticket-sales form div:first-of-type p")
    const locMsg = document.querySelector(".ticket-sales form div:nth-of-type(2) p")
    if (!category.value) {
        categoryMsg.style.visibility = "visible"
    } else {
        categoryMsg.style.visibility = "hidden"
    }

    if (!loc.value) {
        locMsg.style.visibility = "visible"
    } else {
        locMsg.style.visibility = "hidden"
    }

    const genreCity = document.querySelector(".ticket-sales>.graph>p")
    // console.log(genreCity)
    genreCity.textContent = category.value
    
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

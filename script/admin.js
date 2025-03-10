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
const btnFilter = document.querySelector(".sales-chart>:first-child>form button")
btnFilter.addEventListener("click", (e) => {
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
    chooseMovie.addEventListener("change", () => {
        title.textContent = chooseMovie.value
        console.log(title)
    })
})

const category = document.querySelector("select[name='category']")
const loc = document.querySelector("select[name='location']")
const filter = document.querySelector(".ticket-sales>:first-child>form button")
filter.addEventListener("click", (e) => {
    e.preventDefault()

    const categoryMsg = document.querySelector(".ticket-sales>:first-child>form>div:first-of-type>p")
    const locMsg = document.querySelector(".ticket-sales>:first-child>form>div:nth-of-type(2)>p")
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

    const text = document.querySelector(".ticket-sales>.graph>p")
    
    function genreAndCity () {
        text.textContent = `${category.value}, ${loc.value}`
    }
    
    category.addEventListener("change", genreAndCity)
    loc.addEventListener("change", genreAndCity)
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

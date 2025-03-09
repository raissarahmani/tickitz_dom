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

const showDetailNow = document.querySelector("#dropdown")
showDetailNow.addEventListener("click", () => {
    const detailNow = document.querySelector(".history-now")
    if (detailNow.style.display === "block") {
        detailNow.style.display = "none"
    } else {
        detailNow.style.display = "block"
    }
})

const showDataPast = document.querySelectorAll(".dropdown")
showDataPast.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        const detailPast = document.querySelector(".history-past")
        if (detailPast.style.display === "block") {
            detailPast.style.display = "none"
        } else {
            detailPast.style.display = "block"
        }
    })
})
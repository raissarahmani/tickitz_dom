const toDashboard = document.querySelector("nav p:first-of-type")
toDashboard.addEventListener("click", () => {
    location.href = "admin.html"
})

const toMovie = document.querySelector("nav p:last-of-type")
toMovie.addEventListener("click", () => {
    location.href = "admin2.html"
})

const addMovie = document.querySelector(".list div button")
addMovie.addEventListener("click", (e) => {
    e.preventDefault()
    location.href = "admin3.html"
})
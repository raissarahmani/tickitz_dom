const toHome = document.querySelector("nav>p:first-of-type")
toHome.addEventListener("click", () => {
    location.href = "index.html"
}, false)

const toMovie = document.querySelector("nav>p:nth-of-type(2)")
toMovie.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)

const toBuyTicket = document.querySelector("nav>p:nth-of-type(3)")
toBuyTicket.addEventListener("click", () => {
    location.href = "./pages/detail.html"
}, false)

const toSignIn = document.querySelector(".buttons>button:first-of-type")
toSignIn.addEventListener("click", () => {
    location.href = "./pages/signin.html"
}, false)

const toSignUp = document.querySelector(".buttons>button:last-of-type")
toSignUp.addEventListener("click", () => {
    location.href = "./pages/signup.html"
}, false)

// fetch movie list
const API_KEY = "ae266d92588cded8ace6fb5f85c35955"
const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=1`
const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

const containerNow = document.querySelector(".movie-now")
let genreList = {}

async function getGenre () {
    try {
        const response = await fetch (genreUrl)
        const dataGenre = await response.json()
        genreList = dataGenre.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name
            return acc
        }, {})
        movieList()
    } catch (error) {
        console.error(error.message)
    }
}

async function movieList () {
    try {
        const response = await fetch(nowPlayingUrl)
        const dataMovie = await response.json()
        displayNowPlaying(dataMovie.results.slice(0,4))
    } 
    catch (error) {
        console.error (error.message)
    }
}

function displayNowPlaying(movies) {
    containerNow.innerHTML = ""
    movies.forEach(movie => {
        const movieContainer = document.createElement("div")
        movieContainer.classList.add("container-now")

        const genreNames = movie.genre_ids.map(id => genreList[id]).slice(0,2)

        movieContainer.innerHTML = `
            <div class="recomended">Recomended</div>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p class="movie-title">${movie.title}</p>
            <div class="genre">
                ${genreNames.map(name => `<p>${name}</p>`).join("")}
            </div>
            <div class="detail">
                <div>Details</div>
                <div>Buy Ticket</div>
            </div>`
        containerNow.appendChild(movieContainer)

    })
}

getGenre()


// to detail movie
const detailMovie = document.querySelectorAll(".detail :first-child")
detailMovie.forEach((detail) => {
    detail.addEventListener("click", () => {
        location.href = "./pages/detail.html"
    }, false)
})

const viewAll = document.querySelector(".viewall")
viewAll.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)


// fetch upcoming movie
const upcomingUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
const genreUpUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`

const containerUp = document.querySelector(".movie-up")
let upcomingGenreList = {}

async function getUpGenre () {
    try {
        const response = await fetch (genreUpUrl)
        const dataGenre = await response.json()
        upcomingGenreList = dataGenre.genres.reduce((acc, genre) => {
            acc[genre.id] = genre.name
            return acc
        }, {})
        upMovieList()
    } catch (error) {
        console.error(error.message)
    }
}

async function upMovieList () {
    try {
        const responseUp = await fetch(upcomingUrl)
        const dataUpMovieUp = await responseUp.json()
        displayNowPlaying(dataUpMovieUp.results.slice(0,4))
    } 
    catch (error) {
        console.error (error.message)
    }
}

function displayUpcoming(movies) {
    containerUp.innerHTML = ""
    movies.forEach(movie => {
        const upMovieContainer = document.createElement("div")
        upMovieContainer.classList.add("container-up")

        const genreNames = movie.genre_ids.map(id => genreList[id]).slice(0,2)
        const releaseDate = new Date(movie.release_date).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
        })

        upMovieContainer.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p class="movie-title">${movie.title}</p>
            <div class="genre">
                ${genreNames.map(name => `<p>${name}</p>`).join("")}
            </div>
            <p class="release">${releaseDate}</p>
            <div class="detail">
                <div>Details</div>
                <div>Buy Ticket</div>
            </div>`
        containerUp.appendChild(upMovieContainer)

    })
}

getUpGenre()

// newsletter
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

const hamburgerMenu = document.querySelector(".hamburger-menu")
const mobileMenu = document.querySelector("header div:last-child img")
mobileMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active")
})

const home = document.querySelector(".hamburger-menu>nav>p:first-of-type")
home.addEventListener("click", () => {
    location.href = "index.html"
}, false)

const movie = document.querySelector(".hamburger-menu>nav>p:nth-of-type(2)")
movie.addEventListener("click", () => {
    location.href = "./pages/home2.html"
}, false)

const buyTicket = document.querySelector(".hamburger-menu>nav>p:nth-of-type(3)")
buyTicket.addEventListener("click", () => {
    location.href = "./pages/detail.html"
}, false)

const signIn = document.querySelector(".hamburger-menu>nav>p:nth-of-type(4)")
signIn.addEventListener("click", () => {
    location.href = "./pages/signin.html"
}, false)

const signUp = document.querySelector(".hamburger-menu>nav>p:nth-of-type(5)")
signUp.addEventListener("click", () => {
    location.href = "./pages/signup.html"
}, false)
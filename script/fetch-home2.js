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
        displayNowPlaying(dataMovie.results.slice(0,12))
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
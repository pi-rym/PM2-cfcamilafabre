const seccionPeliculas = document.querySelector(".seccion-peliculas");

class Movie {
    constructor(title, year, director, duration, genre, rate, poster) {
        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

class Repository {
    constructor() {
        this.movies = [];
    }

    createMovie({ title, year, director, duration, genre, rate, poster }) {
        const newMovie = new Movie(title, year, director, duration, genre, rate, poster);
        this.movies.push(newMovie);
    }
}

const repository = new Repository();

const addMovie = () => {
    $.get("https://students-api.2.us-1.fl0.io/movies", (movies) => {
        movies.forEach((movie) => {
            repository.createMovie(movie);
        });
        renderTarjetas();
    });
};

const renderTarjetas = () => {
    const movies = repository.movies;
    movies.map((movie) => {
        const { title, year, director, duration, genre, rate, poster } = movie;

        const tarjetaPelicula = document.createElement('div');
        tarjetaPelicula.classList.add("pelicula");

        const tituloPeli = document.createElement('h3');
        tituloPeli.classList.add("titulo-pelicula");
        tituloPeli.innerHTML = title;

        const descripcionPeli = document.createElement('p');
        descripcionPeli.classList.add("descripcion-peli");
        descripcionPeli.innerText = `Año: ${year}, Director: ${director}, Duracion: ${duration}, Genero: ${genre}, Rate: ${rate}`;

        const imagenPeli = document.createElement('img');
        imagenPeli.classList.add("imagen-peli");
        imagenPeli.src = poster;

        tarjetaPelicula.appendChild(tituloPeli);
        tarjetaPelicula.appendChild(descripcionPeli);
        tarjetaPelicula.appendChild(imagenPeli);

        seccionPeliculas.appendChild(tarjetaPelicula);
    });
};

addMovie();



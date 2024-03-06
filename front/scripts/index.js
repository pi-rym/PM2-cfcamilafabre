const renderTarjetas = (title, year, director, duration, genre, rate, poster) => {
    const seccionPeliculas = document.querySelector(".seccion-peliculas");
    
    const tarjetaPelicula = document.createElement('div');
    tarjetaPelicula.classList.add("pelicula");

    const tituloPeli = document.createElement('h3');
    tituloPeli.classList.add("titulo-pelicula");
    tituloPeli.innerHTML = title;

    const descripcionPeli = document.createElement('p');
    descripcionPeli.classList.add("descripcion-peli");
    descripcionPeli.innerText = `Año: ${year}, 
    Director: ${director}, duracion: ${duration}, genero: ${genre}, rate: ${rate}`;

    const imagenPeli = document.createElement('img');
    imagenPeli.classList.add("imagen-peli");
    imagenPeli.src = poster;

    tarjetaPelicula.appendChild(tituloPeli);
    tarjetaPelicula.appendChild(descripcionPeli);
    tarjetaPelicula.appendChild(imagenPeli);

    seccionPeliculas.appendChild(tarjetaPelicula);
}

$.get("https://students-api.2.us-1.fl0.io/movies", (movies) => {
    movies.forEach((movie) => {
        const { title, year, director, duration, genre, rate, poster } = movie;
        renderTarjetas(title, year, director, duration, genre, rate, poster);
    });
});





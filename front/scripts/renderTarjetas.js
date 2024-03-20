const seccionPeliculas = document.querySelector(".seccion-peliculas");

function renderTarjetas(movie) {
    const { title, year, director, duration, genre, rate, poster } = movie;

    const tarjetaPelicula = document.createElement('div');
    tarjetaPelicula.classList.add("pelicula");

    const tituloPeli = document.createElement('h3');
    tituloPeli.classList.add("titulo-pelicula");
    tituloPeli.innerHTML = title;

    const descripcionPeli = document.createElement('p');
    descripcionPeli.classList.add("descripcion-peli");
    descripcionPeli.innerText = `Año: ${year}, Director: ${director}, Duración: ${duration}, Género: ${genre}, Rate: ${rate}`;

    const imagenPeli = document.createElement('img');
    imagenPeli.classList.add("imagen-peli");
    imagenPeli.src = poster;

    tarjetaPelicula.appendChild(tituloPeli);
    tarjetaPelicula.appendChild(descripcionPeli);
    tarjetaPelicula.appendChild(imagenPeli);

    seccionPeliculas?.appendChild(tarjetaPelicula);
}

module.exports = renderTarjetas;
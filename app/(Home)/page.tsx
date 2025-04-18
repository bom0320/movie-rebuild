import Link from "next/link";
import Movie from "../../components/movie";

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div>
        {movies.map((movie) =>
            <div>
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            </div>
        )}
    </div>
}
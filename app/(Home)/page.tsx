import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.movie}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster_path={movie.poster_path}
                    title={movie.title}
                />
            ))}
        </div>
    );
}
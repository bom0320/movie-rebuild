import { API_URL } from "../app/(Home)/page";
import styles from "../styles/movie-info.module.css";

async function getMovie(id: string) {
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}

export default async function MovieInfo({ id }: { id: string }) {
    const movie = await getMovie(id);
    return <div className={styles.container}>
        <img src={movie.poster_path} alt={movie.title} />
        <div className={styles.info}>
            <h1 className={styles.movie_title}>{movie.title}</h1>
            <h2>⭐️ {movie.vote_average}</h2>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"}>Home &rarr;</a>
        </div>

    </div>
}
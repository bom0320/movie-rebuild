
const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

export async function getMovies() {
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div>
        {JSON.stringify(movies)}
    </div>
}
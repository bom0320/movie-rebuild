import { Suspense } from "react";
import { API_URL } from "../../../(Home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({ params: { id } }) {
    return <div>
        <Suspense fallback={<h1>Loading Movie info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}
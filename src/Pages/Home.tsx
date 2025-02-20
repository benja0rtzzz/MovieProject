import {useEffect, useState} from 'react';
import axios from 'axios';
import MovieCard from "../Components/MovieCard.tsx";

const MDB_API_KEY = "521b418e6b0c0227a624515e80c9288a";
const MDB_API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${MDB_API_KEY}`;

interface Movie{
    id: number;
    title: string;
    poster_path: string;
    vote_average: number;
}


export default function Home() {
    const [movies, setMovies] = useState<Movie[]>([]);
    useEffect(() => {
        axios.get(MDB_API_URL).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    return (
        <div className="flex bg-gray-900 w-screen h-screen items-start justify-center">
            <div className={'overflow-scroll pl-10'} >
                <h1 className="text-5xl font-bold text-white">Home</h1>
                <p className="text-gray-400">Welcome to your home</p>
                <br/>
                <div className="flex flex-row w-full overflow-scroll">
                    {movies.map((movie) => (
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            rating={movie.vote_average}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
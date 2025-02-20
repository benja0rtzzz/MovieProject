import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const MDB_API_KEY = "521b418e6b0c0227a624515e80c9288a";
const url = 'https://api.themoviedb.org/3/movie/';

export default function MovieDetails(){
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        axios.get(`${url}${id}?api_key=${MDB_API_KEY}`).then(
            (res) => setMovie(res.data)
        )
    }, [id]);

    if (!movie)
        return (
            <div className="flex justify-center items-cente h-screen">
                <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );


    return(
        <div className="pt-4 pb-40 bg-gray-900">
            <div className="p-4 max-w-sm mx-auto bg-gray-800 text-white rounded-lg shadow-md">
                <img
                    src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full rounded-md"
                />
                <div className="mt-4 text-center">
                    <h1 className="text-xl font-bold">{movie.title}</h1>
                    <p className="text-sm text-gray-400 mt-1">⭐ {movie.vote_average}/10</p>
                </div>
            </div>

        </div>



    )

}
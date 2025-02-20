import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import axios from 'axios';
import MovieCard from '../Components/MovieCard'

const MDB_API_KEY = "521b418e6b0c0227a624515e80c9288a";
const url = 'https://api.themoviedb.org/3/search/movie';

export default function Search(){
    const location = useLocation()
    const [movies, setMovies] = useState([])
    const query = new URLSearchParams(location.search).get('q')

    useEffect(()=>{
        if (query){
            axios.get(`${url}?api_key=${MDB_API_KEY}&query=${query}`).then(
                (res)=>setMovies(res.data.results)
            );
        }
    }, [query]);

    return (
        <div className="flex bg-gray-900 w-screen h-screen items-start justify-center">
            <div className={'overflow-scroll pl-10'} >
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
    )

}
import {Link} from "react-router-dom";

interface MovieProps{
    id: number;
    title: string;
    poster: string;
    rating: number;
};

export default function MovieCard({ id, title, poster, rating }: MovieProps) {
    const getRatingColor = (rating: number) => {
        if (rating >= 7.5) return "text-green-500";
        if (rating >= 4) return "text-yellow-500";
        return "text-red-500";
    };

    return (
        <div className="rounded-2xl shadow-lg p-4 w-64" key={id}>
            <img
                src={poster}
                alt={title}
                className="w-full h-96 object-cover rounded-lg"
            />
            <div className="mt-2">


                <h3 className="text-xl font-semibold truncate text-white">
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h3>
                <p className="text-sm text-gray-500">Rating:</p>
                <p className={`text-sm ${getRatingColor(rating)}`}>{rating}/10</p>
            </div>
        </div>
    );
};



import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';

export default function NavBar() {
    const [query , setQuery] = useState("");
    const navigate = useNavigate();

    function handleSearch(event: React.FormEvent) {
        event.preventDefault()
        navigate(`/search?q=${query}`)

    }

    return (
        <nav className="bg-gray-900 p-4 flex justify-between items-center shadow-lg">
            <div className="flex items-center space-x-6">
                <Link to="/" className="text-white text-lg font-semibold hover:text-gray-400">Home</Link>
                <Link to="/search" className="text-white text-lg font-semibold hover:text-gray-400">Search</Link>
                <Link to="/about" className="text-white text-lg font-semibold hover:text-gray-400">About</Link>

            </div>
            <form onSubmit={handleSearch} className="flex items-center bg-gray-800 rounded-lg p-2 shadow-md">
                <input
                    type="text"
                    value={query}
                    placeholder="Search..."
                    onChange={(e) => setQuery(e.target.value)}
                    className="p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                />
                <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-r-lg">Search</button>
            </form>
        </nav>
    )
}
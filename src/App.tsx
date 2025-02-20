import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Search from './Pages/Search.tsx'
import Dashboard from './Pages/Dashboard.tsx'
import Profile from './Pages/Profile.tsx'
import NavBar from "./Components/NavBar.tsx";
import MovieDetails from "./Pages/MovieDetails.tsx";

export default function App(){
  return (
      <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
        </Routes>
      </div>
  );
}
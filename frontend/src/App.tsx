import React from 'react';
import './App.css';
import useMovies from "./hooks/useMovies";
import MovieGallery from "./components/MovieGallery";
import NavBar from "./components/NavBar";
import Homepage from "./pages/Homepage";

function App() {

    const {movies, getAllMovies, postNewMovie} = useMovies();

    return (
        <div className="App">
            <header className={"App-header"}>
                <div className="App-logo">
                </div>
                    <h1> Movie Bank </h1>
                <div>

                    <Homepage/>

                </div>
                <MovieGallery movies={movies} getAllMovies={getAllMovies} postNewMovie={postNewMovie}/>
            </header>

        </div>
    );
}

export default App;

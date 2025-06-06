import "../css/Favourites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites(){
    const {favorites} = useMovieContext();
    if (favorites) {
        return(
            <div className='favorites'>
            <h2>Your Favourite Movies</h2>
        <div className="movies-grid">
        {favorites.map((movie) =>(
            <MovieCard movie={movie} key={movie.id}/>
            ))}
      </div>
      </div>
      )
    
    }
    return <div className="favorites-empty">
        <h2>No Favourite Movies yet</h2>
        <p>Start adding movies to your favourites and they will appear here</p>
    </div>
}
export default Favorites;


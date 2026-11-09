import type { Movie } from "../types";

interface MovieCardProps { movie: Movie; }

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="movie-card">
      <div className="movie-poster-wrap">
        <img className="movie-poster" src={movie.poster} alt={`${movie.title} poster`} loading="lazy" />
        <span className="rating">★ {movie.rating}</span>
        <button className="play-button" aria-label={`View ${movie.title}`}>▶</button>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <div className="movie-meta"><span>{movie.year}</span><i /> <span>{movie.duration}</span><i /> <span>{movie.genre}</span></div>
      </div>
    </article>
  );
}

import type { Movie } from "../types";
import MovieCard from "./MovieCard";

interface MovieSectionProps {
  title: string;
  subtitle: string;
  movies: Movie[];
}

export default function MovieSection({ title, subtitle, movies }: MovieSectionProps) {
  const id = title.startsWith("Trending") ? "trending" : "recommended";
  return (
    <section className="movie-section" id={id}>
      <div className="section-heading">
        <div><span className="section-kicker">BROWSE COLLECTION</span><h2>{title}</h2><p>{subtitle}</p></div>
        <a href="#home" className="view-all">View all <span>→</span></a>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import MovieSection from "./components/MovieSection";
import Footer from "./components/Footer";
import { trendingMovies, recommendedMovies } from "./data/movies";

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <MovieSection title="Trending Movies" subtitle="The most popular movies right now" movies={trendingMovies} />
        <MovieSection title="Recommended for You" subtitle="Handpicked movies you might enjoy" movies={recommendedMovies} />
      </main>
      <Footer />
    </div>
  );
}

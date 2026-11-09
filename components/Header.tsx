import { useState } from "react";

export default function Header() {
  const [query, setQuery] = useState("");
  return (
    <header className="site-header">
      <a className="brand" href="#"><span className="brand-mark">M</span> MOVIE<span>BAZER</span></a>
      <nav className="main-nav">
        <a className="active" href="#home">Home</a>
        <a href="#trending">Movies</a>
        <a href="#recommended">Discover</a>
      </nav>
      <label className="search-box">
        <span aria-hidden="true">⌕</span>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search movies..." aria-label="Search movies" />
      </label>
      <button className="sign-in">Sign in</button>
    </header>
  );
}

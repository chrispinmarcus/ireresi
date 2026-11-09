import type { Movie } from "../types";

const poster = (path: string) => `https://image.tmdb.org/t/p/w500/${path}`;

export const trendingMovies: Movie[] = [
  {
  id: 1,
  title: "Guardians of the Galaxy Vol. 3",
  year: "2023",
  poster: poster("r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"),
  duration: "150 min",
  rating: "8.0",
  genre: "Adventure",
},
  { id: 2, title: "Shazam! Fury of the Gods", year: "2023", poster: poster("A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"), duration: "130 min", rating: "6.0", genre: "Fantasy" },
  { id: 3, title: "Dungeons & Dragons", year: "2023", poster: poster("A7AoNT06aRAc4SV89Dwxj3EYAgC.jpg"), duration: "134 min", rating: "7.3", genre: "Adventure" },
  { id: 4, title: "John Wick: Chapter 4", year: "2023", poster: poster("vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"), duration: "169 min", rating: "7.7", genre: "Action" },
  { id: 5, title: "Spider-Man: Across the Spider-Verse", year: "2023", poster: poster("8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg"), duration: "140 min", rating: "8.6", genre: "Animation" },
  { id: 6, title: "Oppenheimer", year: "2023", poster: poster("ptpr0kGAckfQkJeJIt8st5dglvd.jpg"), duration: "180 min", rating: "8.1", genre: "Drama" },
];

export const recommendedMovies: Movie[] = [
  { id: 7, title: "Barbie", year: "2023", poster: poster("iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg"), duration: "114 min", rating: "7.0", genre: "Comedy" },
  { id: 8, title: "Avatar: The Way of Water", year: "2022", poster: poster("kyeqWdyUXW608qlYkRqosgbbJyK.jpg"), duration: "192 min", rating: "7.6", genre: "Sci-Fi" },
  { id: 9, title: "The Batman", year: "2022", poster: poster("74xTEgt7R36Fpooo50r9T25onhq.jpg"), duration: "176 min", rating: "7.7", genre: "Action" },
  { id: 10, title: "Black Panther: Wakanda Forever", year: "2022", poster: poster("sv1xJUazXeYqALzczSZ3O6nkH75.jpg"), duration: "161 min", rating: "6.7", genre: "Action" },
];

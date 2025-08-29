import MovieCard from "./components\MovieCard.jsx\MovieCard";

const movies = [
  { title: "Cult-of-Chucky-2017", year: 2010, image: "/movies/Cult-of-Chucky-2017.jpg" },
  { title: "Evil-Dead-2013", year: 2014, image: "/movies/Evil-Dead-2013.jpg" },
  { title: "Evil-Dead-Rise-2023", year: 2008, image: "/movies/Evil-Dead-Rise-2023.jpg" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-3xl text-white font-bold mb-8">Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </main>
  );
}
import { useState, useEffect } from "react";

import Card from "@/components/Card";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPages] = useState(1);

  const loadMovies = () => {
    fetch("https://movie-api-gbh.vercel.app/api/movies")
      .then((response) => response.json())
      .then(({ data, page }) => {
        setMovies(data);
        setPages(page);
      });
  };

  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <>
      <div className="bg-red-500 text-center p-4 md:p-8">
        <h1 className="text-sm  md:text-2xl">Free Movies</h1>
      </div>
      <div className="w-full px-4 md:px-16 md:gap-6 pt-10 grid grid-cols-2 lg:grid-cols-3 gap-3">
        {movies.map((i) => (
          <Card
            key={i.vote_count}
            alt={i.original_title}
            text={i.title}
            src={i.posterUrl}
          />
        ))}
      </div>
    </>
  );
}

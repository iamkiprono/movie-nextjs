import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=aeeb61963da597e184eba3a9b3377487"
  );
  const movies = await data.json();

  const calcRatings = (rate) => {
    const rating = (rate / 10) * 100;
    return rating;
  };

  return (
    <div>
          <p className="text-center text-xl font-bold mt-6">Popular Movies</p>
    <div className="flex flex-wrap items-center justify-center gap-5 p-6">
      {movies &&
        movies.results.map((movie) => {
          return (
            <Link href={`/moviedetails/${movie.id}`}>
              <div className="max-h-[800px] max-w-xs rounded-xl bg-blue-200 p-6 shadow-2xl">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt=""
                />
                <h4 className="my-4 text-3xl font-bold">
                  {movie.original_title}
                </h4>
                <p className="font-bold">
                  Release Year: {new Date(movie.release_date).getFullYear()}
                </p>
                <p>Rating: {Math.floor(calcRatings(movie.vote_average))}%</p>
              </div>
            </Link>
          );
        })}
    </div>
    </div>
  );
};

export default page;

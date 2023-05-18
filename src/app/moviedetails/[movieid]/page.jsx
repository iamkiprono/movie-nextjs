import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const { movieid } = params;
  const singleMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=aeeb61963da597e184eba3a9b3377487`
  );
  const movie = await singleMovie.json();

  const calcRatings = (rate) => {
    const rating = (rate / 10) * 100;
    return rating;
  };
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-white"
    >
      <p className="mt-6 text-center text-xl font-bold">Movie Details</p>
      <div className="p-6">
        <div className="m-auto min-h-[360px] max-w-6xl p-6 shadow-2xl bg-[#6151518c] rounded-3xl ">
          <Image
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            width={500}
            height={500}
            alt={movie.original_title}
          />
          <h4 className="my-4 text-3xl font-bold">{movie.original_title}</h4>
          <h4 className="mb-4">{movie.overview}</h4>
          <p className="font-bold">
            Release Year: {new Date(movie.release_date).getFullYear()}
          </p>
          <p>Rating: {Math.floor(calcRatings(movie.vote_average))}%</p>
        </div>
      </div>
    </div>
  );
};

export default page;

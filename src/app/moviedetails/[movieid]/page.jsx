import React from "react";

const page = async ({ params }) => {
  const { movieid } = params;
  const singleMovie = await fetch(
    `https://api.themoviedb.org/3/movie/${movieid}?api_key=aeeb61963da597e184eba3a9b3377487`
  );
  const movie = await singleMovie.json();
  return (
    <div>
        <p className="text-center text-xl font-bold mt-6">Movie Details</p>
      <div className="p-6">
        <div className="min-h-[360px] max-w-6xl m-auto p-6 shadow-2xl ">
          <img 
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
          />
          <h4 className="my-4 text-3xl font-bold">{movie.original_title}</h4>
          <h4 className="mb-4">{movie.overview}</h4>
          <img className="w-full h-1/2"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default page;

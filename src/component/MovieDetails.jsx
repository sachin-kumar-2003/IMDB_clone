<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails({ imdbID }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true); 
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=48aa722f`)
      .then((res) => {
        setMovies([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
        setLoading(false); 
      });
  }, [imdbID]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; 
  }

  if (movies.length === 0) {
    return null;
  }
  if(!imdbID){
    return <div className="text-center text-red-500">select movie </div>
  }

   return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl w-full md:flex-row">
        <div className="flex-shrink-0 w-48">
          <img
            src={movies[0].Poster}
            alt={movies[0].Title}
            className="w-full h-auto rounded-tl-lg rounded-bl-lg"
          />
        </div>
        <div className="flex-grow p-6 text-gray-200">
          <h1 className="text-3xl text-yellow-400 font-bold mb-4">
            {movies[0].Title}
          </h1>
          <p className="mb-3 text-lg text-gray-400">
            <strong className="text-yellow-400 font-bold">Year:</strong>{" "}
            {movies[0].Year}
          </p>
          <div className="flex items-center mb-3">
            <strong className="text-yellow-400 font-bold mr-2">
              IMDb Rating:
            </strong>
            <span className="text-red-400 font-bold">
              {movies[0].imdbRating}
            </span>
            <div className="ml-2 flex items-center">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.round(movies[0].imdbRating / 2)
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.386 4.26a1 1 0 00.95.69h4.487c.969 0 1.371 1.24.588 1.81l-3.636 2.615a1 1 0 00-.364 1.118l1.386 4.26c.3.921-.755 1.688-1.54 1.118l-3.636-2.615a1 1 0 00-1.175 0l-3.636 2.615c-.785.57-1.84-.197-1.54-1.118l1.386-4.26a1 1 0 00-.364-1.118L2.11 9.687c-.783-.57-.38-1.81.588-1.81h4.487a1 1 0 00.95-.69l1.386-4.26z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Runtime:</strong>{" "}
            {movies[0].Runtime}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Genre:</strong>{" "}
            {movies[0].Genre}
          </p>
          <p className="mb-3 text-lg text-gray-200 italic">
            <strong className="text-yellow-400">Plot:</strong> {movies[0].Plot}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Starring:</strong>{" "}
            {movies[0].Actors}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Director:</strong>{" "}
            {movies[0].Director}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
=======
import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieDetails({ imdbID }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    setLoading(true); 
    axios
      .get(`http://www.omdbapi.com/?i=${imdbID}&apikey=48aa722f`)
      .then((res) => {
        setMovies([res.data]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data. Please try again.");
        setLoading(false); 
      });
  }, [imdbID]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>; 
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>; 
  }

  if (movies.length === 0) {
    return null;
  }
  if(!imdbID){
    return <div className="text-center text-red-500">select movie </div>
  }

   return (
    <div className="flex justify-center items-center mt-10">
      <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden max-w-3xl w-full md:flex-row">
        <div className="flex-shrink-0 w-48">
          <img
            src={movies[0].Poster}
            alt={movies[0].Title}
            className="w-full h-auto rounded-tl-lg rounded-bl-lg"
          />
        </div>
        <div className="flex-grow p-6 text-gray-200">
          <h1 className="text-3xl text-yellow-400 font-bold mb-4">
            {movies[0].Title}
          </h1>
          <p className="mb-3 text-lg text-gray-400">
            <strong className="text-yellow-400 font-bold">Year:</strong>{" "}
            {movies[0].Year}
          </p>
          <div className="flex items-center mb-3">
            <strong className="text-yellow-400 font-bold mr-2">
              IMDb Rating:
            </strong>
            <span className="text-red-400 font-bold">
              {movies[0].imdbRating}
            </span>
            <div className="ml-2 flex items-center">
              {[...Array(5)].map((star, index) => (
                <svg
                  key={index}
                  className={`w-4 h-4 ${
                    index < Math.round(movies[0].imdbRating / 2)
                      ? "text-yellow-400"
                      : "text-gray-600"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.386 4.26a1 1 0 00.95.69h4.487c.969 0 1.371 1.24.588 1.81l-3.636 2.615a1 1 0 00-.364 1.118l1.386 4.26c.3.921-.755 1.688-1.54 1.118l-3.636-2.615a1 1 0 00-1.175 0l-3.636 2.615c-.785.57-1.84-.197-1.54-1.118l1.386-4.26a1 1 0 00-.364-1.118L2.11 9.687c-.783-.57-.38-1.81.588-1.81h4.487a1 1 0 00.95-.69l1.386-4.26z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Runtime:</strong>{" "}
            {movies[0].Runtime}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Genre:</strong>{" "}
            {movies[0].Genre}
          </p>
          <p className="mb-3 text-lg text-gray-200 italic">
            <strong className="text-yellow-400">Plot:</strong> {movies[0].Plot}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Starring:</strong>{" "}
            {movies[0].Actors}
          </p>
          <p className="mb-3 text-lg text-blue-400 font-bold">
            <strong className="text-yellow-400">Director:</strong>{" "}
            {movies[0].Director}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b

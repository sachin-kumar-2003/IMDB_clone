<<<<<<< HEAD
import React, { useContext, useEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";
import { Watchlistcontext } from "../context/WatchListContext";

function Movies({ getImdbId }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const searchMovie = useRef("batman");
  const [searchMovieName, setSearchMovieName] = useState("batman");
  const handleSearchMovie = () => {
    setSearchMovieName(searchMovie.current.value);
    setPageNo(1);
  };

  const prevPage = () => {
    if (pageNo === 1) {
      return;
    }
    setPageNo(pageNo - 1);
  };

  const nextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${searchMovieName}&page=${pageNo}&apikey=48aa722f`
      )
      .then((res) => {
        setMovies(res.data.Search);
      });
  }, [searchMovieName, pageNo]);

  return (
    <>
      <div className="p-5">
        <div className="text-xl font-bold text-center m-5">
          Search Movies Here
        </div>
      </div>
      <div className="w-full h-20 p-5 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter your movie here"
          defaultValue={searchMovieName}
          ref={searchMovie}
          className="w-2/6 h-10 rounded p-2 bg-gray-300 text-black"
        />
        <div
          className="w-20 bg-blue-500 flex justify-center items-center rounded text-white font-bold hover:cursor-pointer"
          onClick={handleSearchMovie}
        >
          Search
        </div>
      </div>
      <div className="flex gap-8 flex-row flex-wrap justify-center">
        {movies &&
          movies.map((movieObj) => (
            <Moviecard
              key={movieObj.imdbID}
              poster={movieObj.Poster}
              name={movieObj.Title}
              movieObj={movieObj}
              getImdbId={getImdbId}
            />
          ))}
      </div>
      <br />
      <Pagination prevPage={prevPage} nextPage={nextPage} pageNo={pageNo} />
    </>
  );
}

export default Movies;
=======
import React, { useContext, useEffect, useRef, useState } from "react";
import Moviecard from "./Moviecard";
import axios from "axios";
import Pagination from "./Pagination";
import { Watchlistcontext } from "../context/WatchListContext";

function Movies({ getImdbId }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const searchMovie = useRef("batman");
  const [searchMovieName, setSearchMovieName] = useState("batman");
  const handleSearchMovie = () => {
    setSearchMovieName(searchMovie.current.value);
    setPageNo(1);
  };

  const prevPage = () => {
    if (pageNo === 1) {
      return;
    }
    setPageNo(pageNo - 1);
  };

  const nextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `http://www.omdbapi.com/?s=${searchMovieName}&page=${pageNo}&apikey=48aa722f`
      )
      .then((res) => {
        setMovies(res.data.Search);
      });
  }, [searchMovieName, pageNo]);

  return (
    <>
      <div className="p-5">
        <div className="text-xl font-bold text-center m-5">
          Search Movies Here
        </div>
      </div>
      <div className="w-full h-20 p-5 flex justify-center gap-2">
        <input
          type="text"
          placeholder="Enter your movie here"
          defaultValue={searchMovieName}
          ref={searchMovie}
          className="w-2/6 h-10 rounded p-2 bg-gray-300 text-black"
        />
        <div
          className="w-20 bg-blue-500 flex justify-center items-center rounded text-white font-bold hover:cursor-pointer"
          onClick={handleSearchMovie}
        >
          Search
        </div>
      </div>
      <div className="flex gap-8 flex-row flex-wrap justify-center">
        {movies &&
          movies.map((movieObj) => (
            <Moviecard
              key={movieObj.imdbID}
              poster={movieObj.Poster}
              name={movieObj.Title}
              movieObj={movieObj}
              getImdbId={getImdbId}
            />
          ))}
      </div>
      <br />
      <Pagination prevPage={prevPage} nextPage={nextPage} pageNo={pageNo} />
    </>
  );
}

export default Movies;
>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b

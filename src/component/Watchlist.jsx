<<<<<<< HEAD
import React, { useContext } from "react";
import { Watchlistcontext } from "../context/WatchListContext";
import { MdDelete } from "react-icons/md";

function Watchlist() {
  const {watchList}=useContext(Watchlistcontext)
  const {removeWatchList}=useContext(Watchlistcontext)
  return (
    <div className="border-2">
      <table className="w-full table-fixed">
        <thead className="bg-gray-900/20">
          <tr className="border-b-2 border-black">
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Year</th>
            <th className="px-4 py-2 text-center">Type</th>
            <th className="px-4 py-2 text-center">IMDBid</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {watchList.map((movie, index) => (
            <tr key={index} className="border-2">
              <td className="px-4 py-2 text-center flex flex-col w-full justify-center items-center font-bold">
                <div
                  className="w-[70px] h-[100px] "
                  style={{
                    background: `url(${movie.Poster})`,
                    backgroundSize: "cover",backgroundRepeat:"no-repeat"
                  }}
                ></div>
                {movie.Title}
              </td>
              <td className="px-2 py-2 text-center font-bold">{movie.Year}</td>
              <td className="px-2 py-2 text-center font-bold">{movie.Type}</td>
              <td className="px-2 py-2 text-center ">
                {movie.imdbID}
              </td>
              <td className="px-2 py-2 text-center font-bold">
                <button onClick={() => removeWatchList(movie)}>
                  <MdDelete className="text-xl text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
=======
import React, { useContext } from "react";
import { Watchlistcontext } from "../context/WatchListContext";
import { MdDelete } from "react-icons/md";

function Watchlist() {
  const {watchList}=useContext(Watchlistcontext)
  const {removeWatchList}=useContext(Watchlistcontext)
  return (
    <div className="border-2">
      <table className="w-full table-fixed">
        <thead className="bg-gray-900/20">
          <tr className="border-b-2 border-black">
            <th className="px-4 py-2 text-center">Name</th>
            <th className="px-4 py-2 text-center">Year</th>
            <th className="px-4 py-2 text-center">Type</th>
            <th className="px-4 py-2 text-center">IMDBid</th>
            <th className="px-4 py-2 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {watchList.map((movie, index) => (
            <tr key={index} className="border-2">
              <td className="px-4 py-2 text-center flex flex-col w-full justify-center items-center font-bold">
                <div
                  className="w-[70px] h-[100px] "
                  style={{
                    background: `url(${movie.Poster})`,
                    backgroundSize: "cover",backgroundRepeat:"no-repeat"
                  }}
                ></div>
                {movie.Title}
              </td>
              <td className="px-2 py-2 text-center font-bold">{movie.Year}</td>
              <td className="px-2 py-2 text-center font-bold">{movie.Type}</td>
              <td className="px-2 py-2 text-center ">
                {movie.imdbID}
              </td>
              <td className="px-2 py-2 text-center font-bold">
                <button onClick={() => removeWatchList(movie)}>
                  <MdDelete className="text-xl text-red-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Watchlist;
>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b

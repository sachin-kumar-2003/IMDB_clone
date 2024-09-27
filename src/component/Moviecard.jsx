<<<<<<< HEAD
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Watchlistcontext } from "../context/WatchListContext";

function Moviecard({
  poster,
  name,
  movieObj,
  getImdbId,
}) {
  function isContaine(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].imdbID == movieObj.imdbID) {
        return true;
      }
    }
    return false;
  }
  const {watchList}=useContext(Watchlistcontext)
  const {handleAddWatchList}=useContext(Watchlistcontext)
  const {removeWatchList}=useContext(Watchlistcontext)
  
  return (
    <>
      <Link to={"/moviedetail"}>
        <div
          className="h-[40vh] z-10 w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-200 relative border-2 shadow-md"
          style={{ backgroundImage: `url(${poster})` }}
          onClick={() => {
            getImdbId(movieObj.imdbID);
          }}
        >
          <div className="text-white w-full h-7 flex items-center justify-end p-1 ">
            <div className="flex-grow"></div>
            {isContaine(movieObj) ? (
              <FaHeart
                className="text-2xl font-bold  bg-transparent text-pink-500 rounded mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  removeWatchList(movieObj);
                }}
              />
            ) : (
              <FaHeart
                className="text-2xl font-bold  bg-transparent rounded mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleAddWatchList(movieObj);
                }}
              />
            )}
          </div>
          <div className="text-white text-xl font-medium w-full text-center bg-gray-900/60 absolute bottom-0 rounded">
            {name}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Moviecard;
=======
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Watchlistcontext } from "../context/WatchListContext";

function Moviecard({
  poster,
  name,
  movieObj,
  getImdbId,
}) {
  function isContaine(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].imdbID == movieObj.imdbID) {
        return true;
      }
    }
    return false;
  }
  const {watchList}=useContext(Watchlistcontext)
  const {handleAddWatchList}=useContext(Watchlistcontext)
  const {removeWatchList}=useContext(Watchlistcontext)
  
  return (
    <>
      <Link to={"/moviedetail"}>
        <div
          className="h-[40vh] z-10 w-[200px] bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-200 relative border-2 shadow-md"
          style={{ backgroundImage: `url(${poster})` }}
          onClick={() => {
            getImdbId(movieObj.imdbID);
          }}
        >
          <div className="text-white w-full h-7 flex items-center justify-end p-1 ">
            <div className="flex-grow"></div>
            {isContaine(movieObj) ? (
              <FaHeart
                className="text-2xl font-bold  bg-transparent text-pink-500 rounded mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  removeWatchList(movieObj);
                }}
              />
            ) : (
              <FaHeart
                className="text-2xl font-bold  bg-transparent rounded mt-2"
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  handleAddWatchList(movieObj);
                }}
              />
            )}
          </div>
          <div className="text-white text-xl font-medium w-full text-center bg-gray-900/60 absolute bottom-0 rounded">
            {name}
          </div>
        </div>
      </Link>
    </>
  );
}

export default Moviecard;
>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b

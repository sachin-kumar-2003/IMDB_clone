import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./component/Movies";
import Navbar from "./component/Navbar";
import Watchlist from "./component/Watchlist";
import Banner from "./component/Banner";
import { useState } from "react";
import { Watchlistcontext } from "./context/WatchListContext";
import MovieDetails from "./component/MovieDetails";

function App() {
  const [watchList, setWatchList] = useState([]);
  const [imdbID, setImdbId] = useState();

  const handleAddWatchList = (movieObj) => {
    console.log(movieObj);
    setWatchList((prevWatchList) => {
      const newWatchList = [movieObj, ...prevWatchList];
      console.log(newWatchList);
      return newWatchList;
    });
  };

  const removeWatchList = (movieObj) => {
    setWatchList((prevWatchList) => {
      const filteredWatchList = prevWatchList.filter((movie) => {
        return movie.imdbID !== movieObj.imdbID;
      });
      console.log(filteredWatchList);
      return filteredWatchList;
    });
  };

  const getImdbId = (imdbID) => {
    setImdbId(imdbID);
  };

  return (
    <Watchlistcontext.Provider value={{
      watchList,
      handleAddWatchList,
      removeWatchList,
    }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  
                  getImdbId={getImdbId}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                removeWatchList={removeWatchList}
                watchList={watchList}
              />
            }
          />
          <Route
            path="/moviedetail"
            element={<MovieDetails imdbID={imdbID} />}
          />
        </Routes>
      </BrowserRouter>
    </Watchlistcontext.Provider>
  );
}

export default App;

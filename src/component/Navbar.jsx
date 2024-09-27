<<<<<<< HEAD
import React from "react";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex space-x-4 border-b-2 h-[60px] items-center pl-3 py-4">
        <div className="bg-blue-500 w-[60px] p-2 flex justify-center rounded-full">
          <MdMovie className="text-3xl  text-white " />
        </div>
        <Link to="/" className="text-blue-500 text-2xl font-bold">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-500  text-2xl font-bold">
          Watchlist
        </Link>
      </div>
    </>
  );
}

export default Navbar;
=======
import React from "react";
import { MdMovie } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex space-x-4 border-b-2 h-[60px] items-center pl-3 py-4">
        <div className="bg-blue-500 w-[60px] p-2 flex justify-center rounded-full">
          <MdMovie className="text-3xl  text-white " />
        </div>
        <Link to="/" className="text-blue-500 text-2xl font-bold">
          Movies
        </Link>
        <Link to="/watchlist" className="text-blue-500  text-2xl font-bold">
          Watchlist
        </Link>
      </div>
    </>
  );
}

export default Navbar;
>>>>>>> 6e386cc8a0552e0071ef4a7fc351f0fa579fd59b

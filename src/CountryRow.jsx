import React from "react";
import { Link } from "react-router-dom";

function CountryRow({ country }) {
  return (
    <>
      <div className="bg-blue-200">
        <div className="grid items-center grid-cols-4 px-4 py-1 my-2 bg-gray-100 border-gray-300 rounded-md hover:border-2">
          <div className="flex items-center w-40 gap-2 aspect-video ">
            <div>{country.flag}</div>
            <div className="px-4 py-2 transition-all duration-1000 hover:scale-150 md:block hidden">
              <img src={country.flags.png} />
            </div>
          </div>
          <div className="font-black text-blue-500">
            {country.name.official}
          </div>
          <div className="font-bold text-blue-500">{country.name.common}</div>
          <div className="font-bold text-red-400 hover:text-blue-400">
            <Link to={`/CountryDetails/${country.flag}`}>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default CountryRow;

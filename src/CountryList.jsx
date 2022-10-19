import React, { useEffect, useState } from "react";
import { CountryData } from "./Api";
import CountryRow from "./CountryRow";
import { Loading1 } from "./Loading";
import { BiLoaderCircle } from "react-icons/bi";

function CountryList() {
  const [country, setCountry] = useState([]);
  const [queryChange, setQueryChange] = useState(" ");
  const [loading, setLoading] = useState(true);
  useEffect(
    function () {
      CountryData().then(function (response) {
        setCountry(response);
        setLoading(false);
      });
    },
    [queryChange]
  );

  if (loading) {
    return (
      <div>
        <Loading1 />
      </div>
    );
  }
  const data = country.filter((c) => {
    if (queryChange == "") {
      return c;
    } else if (
      c.name.common.toLowerCase().includes(queryChange.toLowerCase())
    ) {
      return c;
    }
  });
  console.log("data.length is", data.length);
  return (
    <>
      <div>
        <input
          className="px-4 py-2 m-4 border-4 rounded-md shadow-xl outline-none focus:border-blue-200 focus:text-blue-600"
          placeholder="Country Name"
          onChange={(e) => setQueryChange(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 px-4 py-1 mx-3 my-3 bg-gray-300 rounded-md">
        <span>Country Flag</span>
        <span>Country Official Name</span>
        <span>Country Name</span>
        <span>Details</span>
      </div>
      {data.length == 0 && (
        <>
          <div className="flex items-end justify-center gap-2 mx-auto text-4xl font-black text-red-700">
            Sorry!!! No Data To Show{" "}
            <span>
              <BiLoaderCircle className="animate-spin" />
            </span>
          </div>
          <div className="flex justify-center my-4 text-2xl font-bold ">
            Try Searching Another value
          </div>
        </>
      )}

      {data.map((c, index) => {
        return <CountryRow country={c} key={index} />;
      })}
    </>
  );
}

export default CountryList;

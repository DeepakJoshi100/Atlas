import React, { useEffect, useState } from "react";
import { CountryData } from "./Api";
import { Link, useParams } from "react-router-dom";
import { Loading2 } from "./Loading";

function CountryDetail() {
  const [countryDetail, setCountryDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const { flag } = useParams();

  useEffect(function () {
    CountryData().then(function (response) {
      setCountryDetail(response);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <div>
        <Loading2 />
      </div>
    );
  }
  const detail = countryDetail.filter((country) => country.flag === flag);
  return (
    <>
      <div className="h-screen bg-gray-300">
        <div>
          <Link
            className="px-6 mx-4 my-4 bg-red-400 rounded-md hover:bg-red-500"
            to="/"
          >
            Back
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <div className="py-2 my-2 text-3xl font-bold ">Details</div>
          {detail.map((d, index) => {
            return (
              <div key={index}>
                <div className="flex flex-wrap items-center justify-center gap-2 px-4 py-4 bg-gray-400 rounded-md">
                  <div className="w-64 transition-all duration-1000 aspect-video hover:scale-110">
                    <img src={d.flags.png} />
                  </div>
                  <div className="text-sm font-bold">
                    <div className="text-lg font-black text-orange-400">
                      Country's Name = {d.name.common}
                    </div>
                    <div> Country's Official Name = {d.name.official}</div>
                    <div>Capital = {d.capital}</div>
                    <div>Area = {d.area}sqKm</div>
                    <div>Continent = {d.continents}</div>
                    <div>Population = ±{d.population}</div>
                    <div>Region = {d.region}</div>
                    <div>TimeZone = {d.timezones}</div>
                  </div>
                  <div className="flex flex-col w-48 p-2 mx-auto bg-gray-200 rounded-md shadow-lg aspect-square">
                    <div className="px-2 py-2 mx-auto font-black text-red-400 ">
                      National Emblem
                    </div>
                    <img src={d.coatOfArms.png} className="w-full h-full" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CountryDetail;

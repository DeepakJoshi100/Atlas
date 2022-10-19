import React from "react";
import { Route, Routes } from "react-router-dom";
import CountryDetail from "./CountryDetail";
import CountryList from "./CountryList";
import CountryPage from "./CountryPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<CountryPage />}></Route>
        <Route path="page1" element={<CountryList />}></Route>
        <Route path="/CountryDetails/:flag" element={<CountryDetail />}></Route>
      </Routes>
    </>
  );
}
export default App;

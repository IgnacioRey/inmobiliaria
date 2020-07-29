import React, { useState } from "react";
import Filters from "./components/Filter";
import FilterContext from "./context/FilterContext";
import EstatesGrid from "./components/estateGrid";
import Header from "./components/header";

function App() {
  const [filter, setFilter] = useState({
    rooms: "",
    bathrooms: "",
    parking: "",
    propertyType: "",
  });

  return (
    <div className="App">
      <FilterContext.Provider value={{ filter, setFilter }}>
        <Header />
        <Filters />
        <EstatesGrid />
      </FilterContext.Provider>
    </div>
  );
}

export default App;

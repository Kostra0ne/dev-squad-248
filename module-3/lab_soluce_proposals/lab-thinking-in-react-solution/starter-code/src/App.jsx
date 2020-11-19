import React from "react";
import FilterableProductTable from "./components/product-table/FilterableProductTable";
import "./App.css";
import data from "./data.json";

function App() {
  return (
    <div className="app">
      <FilterableProductTable products={data.data} />
    </div>
  );
}

export default App;

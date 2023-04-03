import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import QueryBuilder from "./pages/QueryBuilder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/builder" element={<QueryBuilder />} />
      </Routes>
    </>
  );
}

export default App;

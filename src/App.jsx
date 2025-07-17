import React, { useState, useRef } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";
import logo from "./assets/logo.jpeg";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const searchBarRef = useRef(null);

  const handleQuery = (q) => {
    setQuery(q);
    searchBarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className={`w-full ${query ? "min-h-screen" : "h-screen"} bg-slate-100 text-black`}>
      <div
        ref={searchBarRef}
        className={`max-w-4xl w-full mx-auto transition-all duration-700 ${
          !query
            ? "flex flex-col items-center justify-center h-full gap-6"
            : "flex items-center gap-4 pt-6"
        }`}
      >
        <img
          src={logo}
          alt="Logo"
          className={`transition-all duration-500 border rounded-full ${
            !query ? "w-40 h-40" : "w-20 h-20"
          }`}
        />
        <SearchBar setQuery={handleQuery} />
      </div>

      {query && (
        <div className="mt-10 max-w-6xl mx-auto pb-10">
          <ImageGrid query={query} setImages={setImages} images={images} />
        </div>
      )}
    </div>
  );
}

export default App;
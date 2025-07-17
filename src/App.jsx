import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGrid from "./components/ImageGrid";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);

  return (
    <div className="min-h-screen bg-gray-800 p-4">
      <SearchBar setQuery={setQuery} />
      <ImageGrid query={query} setImages={setImages} images={images} />
    </div>
  );
}

export default App;
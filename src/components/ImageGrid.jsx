import { useEffect, useState } from "react";
import axios from "axios";

export default function ImageGrid({ query, setImages, images }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      if (!query) return;
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get("https://api.pexels.com/v1/search", {
          params: { query, per_page: 20 },
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_KEY,
          },
        });

        setImages(res.data.photos);
      } catch (err) {
        console.error("Image fetch failed:", err.response || err.message);
        setError("Image fetch failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [query, setImages]);

  return (
    <div className="mt-4">
      {loading && <p className="text-blue-500">Loading images...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && !error && images.length === 0 && query && (
        <p className="text-gray-600">No images found for "{query}"</p>
      )}

      <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-4">
        {images.map((img) => (
          <img
            key={img.id}
            src={img.src.medium}
            alt={img.alt || "Pexels Image"}
            className="w-full h-auto rounded shadow hover:scale-105 transition duration-300"
          />
        ))}
      </div>
    </div>
  );
}

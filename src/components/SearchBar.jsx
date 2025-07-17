import { useState } from "react";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) setQuery(input.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex items-center gap-3 bg-white shadow-md rounded-lg p-3"
    >
      <motion.input
        type="text"
        value={input}
        placeholder="Search stunning images..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        whileFocus={{ scale: 1.03 }}
      />
      <motion.button
        onClick={handleSearch}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 active:scale-95 transition-transform"
      >
        <FiSearch className="text-lg" />
        <span className="hidden md:inline">Search</span>
      </motion.button>
    </motion.div>
  );
}
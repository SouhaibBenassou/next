"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character/";

const fetchCharacters = async () => {
  const response = await axios.get(API_URL);
  return response.data.results;
};

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
      setLoading(false);
    };
    getCharacters();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Characters</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {characters.map((character) => (
          <div key={character.id} className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold">{character.name}</h2>
            <img
              src={character.image}
              alt={character.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

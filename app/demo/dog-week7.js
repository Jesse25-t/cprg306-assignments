"use client";
import { useState, useEffect } from "react";
const loadRandomDog = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await response.json();
  return data.message;
};
const loadDogBreeds = async () => {
  const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
  const data = await response.json();
  return data.message;
};
const loadSelectedDogBreed = async (breed) => {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const data = await response.json();
    return data.message;
};

export default function Dog() {
  const [dogUrl, setDogUrl] = useState(null);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  const getRandomDog = async () => {
    const response = await loadRandomDog();
    setDogUrl(response);
  };

  const getDogBreeds = async () => {
    const response = await loadDogBreeds();
    setDogBreeds(Object.keys(response));
  };

  const getSelectedBreed = async () => {
    if (selectedBreed === "") {
        return
    }
    console.log(selectedBreed);
    const breedUrl = await loadSelectedDogBreed(selectedBreed);
    console.log(breedUrl);
    setDogUrl(breedUrl);
  }
  useEffect(() => {
    getRandomDog();
    getDogBreeds();
  }, []);

  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value);
    console.log(event.target.value);
  }

useEffect(() => {
    console.log("this is not an string")
    getSelectedBreed(selectedBreed);
}, [selectedBreed]);
  return (
    <main>
      <p>Week 7 demo</p>
      <h2>Serect rar dorg</h2>
      <img src={dogUrl} />
      <select onChange={handleBreedChange} className="text-black">
        {dogBreeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed} 
          </option>
        ))}
      </select>
    </main>
  );
}

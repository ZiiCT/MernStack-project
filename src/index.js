import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import AnimalCard from "./components/AnimalCard";
import CreateNewForm from "./components/CreateNewForm";

const App = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/animals");
      console.log(response.data);
      setAnimals(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <p>
        <a href="/">&laquo; Back to public homepage</a>
      </p>
      <CreateNewForm setAnimals={setAnimals}></CreateNewForm>
      <div className="animal-grid">
        {animals.map((animal, index) => (
          <AnimalCard
            key={animal._id + index}
            name={animal.name}
            species={animal.species}
            photo={animal.photo}
            id={animal._id}
            setAnimals={setAnimals}
          ></AnimalCard>
        ))}
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

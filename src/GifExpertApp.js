import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // const categories = ["River Plate", "Talleres", "Racing"];
  const [categories, setCategories] = useState(["River Plate"]);

  // const handleAdd = () => {
  //   const len = categories.length;
  //   let nuevo = `Nuevo ${len}`;

  //   // esto es porque el estado /categories es inmutable, y debo crear una copia del array

  //   setCategories([...categories, nuevo]);

  //   // si lo quiero al inicio
  //   // setCategories([nuevo, ...categories ]);

  //   // otra forma que será muy importante luego
  //   // setCategories( cats => [...cats, nuevo]);
  // };

  // const handleAddAlternativo = () => {
  //   const len = categories.length;
  //   let nuevo = `Nuevo ${len}`;

  //   // esto es porque el estado /categories es inmutable, y debo crear una copia del array
  //   let nuevoState = categories.map((x) => x);
  //   nuevoState.push(nuevo);
  //   setCategories(nuevoState);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

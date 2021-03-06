// import React, { useState, useEffect } from "react";
// import { getGifts } from "../helpers/getGifs";
// import { GifGridItem } from "./GifGridItem";

import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifts(category).then((imgs) => setImages(imgs));
  // }, [category]);

  // // then((imgs) => setImages(imgs));
  // // =
  // //

  return (
    <>
      <h3 className=" animate__animated animate__fadeIn ">{category}</h3>

      {loading && (
        <p className=" animate__animated animate__flash ">Loading...</p>
      )}

      <div className="card-grid">
        {images.map((img) => (
          // <GifGridItem key={img.id} img={img} />
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

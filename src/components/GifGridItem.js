import React from "react";

export const GifGridItem = ({ id, title, url }) => {
  // console.log({ id, title, url });
  return (
    // class es de HTML, pero reservada en JS, asi que se optó por usar className
    <div className="card animate__animated animate__fadeIn animate__delay-2s">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

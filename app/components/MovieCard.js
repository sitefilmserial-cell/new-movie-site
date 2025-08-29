// app/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ title, image }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "200px", margin: "10px" }}>
      <img src={image} alt={title} style={{ width: "100%", height: "auto" }} />
      <h3>{title}</h3>
    </div>
  );
};

export default MovieCard;
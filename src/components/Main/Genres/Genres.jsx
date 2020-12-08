import React from "react";

import "./genres.css";

export default function Genres(props) {
  return (
    <div className="genres">
      <div className="genreList">
        {props.genres.map((genre) => {
          return (
            <p
              style={{
                fontSize:
                  genre[1] > 3 ? `${genre[1] + 15}px` : `${genre[1] + 10}px`,
                fontWeight: genre[1] > 4 ? "bold" : "200",
                color: genre[1] > 5 ? "white" : null,
                alignSelf: "center",
              }}
            >
              {genre[0]}
            </p>
          );
        })}
      </div>
    </div>
  );
}
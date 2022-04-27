import React, { useState, useEffect } from "react";
import "./MyGenre.scss";

const MyGenre = props => {
  const [genreMap, setGenreMap] = useState();
  const [mostKey, setMostKey] = useState("");
  const [mostValue, setMostValue] = useState(0);
  useEffect(() => {
    const map = new Map();
    for (let i = 0; i < 50; i++) {
      const genre = props.following.artists.items[i].genres;
      for (let j = 0; j < genre.length; j++) {
        const number = map.get(genre[j]);
        if (map.has(genre[j])) {
          map.set(genre[j], number + 1);
        } else {
          map.set(genre[j], 1);
        }
      }
    }
    let tempKey;
    let tempValue = -1;
    for (let [key, value] of map) {
      if (value > tempValue) {
        tempKey = key;
        tempValue = value;
      }
    }
    setMostKey(tempKey);
    setMostValue(tempValue);
    setGenreMap(map);
  }, []);

  return (
    <div className='my-genre-container'>
      <span>
        My Genre is <span className='mostKey'>{mostKey}</span>
      </span>
      {/* <span className='my-genre-genre'>{mostKey}</span> */}
    </div>
  );
};

export default MyGenre;

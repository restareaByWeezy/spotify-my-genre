import React from "react";
import { profile } from "../data/profile";
import "./styles/MyGenre.scss";

const MyGenre = () => {
  let genreMap = new Map();

  for (let i = 0; i < 50; i++) {
    const genre = profile.artists.items[i].genres;
    console.log(genre);
    for (let a = 0; i < genre.length; i++) {
      const number = genreMap.get(genre[a]);
      if (genreMap.has(genre[a])) {
        genreMap.set(genre[a], number + 1);
      } else {
        genreMap.set(genre[a], 1);
      }
    }
  }

  const genreSort = new Map(
    [...genreMap.entries()].sort((a, b) => b[1] - a[1])
  );
  const mostGenre = genreSort.get(genreSort[Object.keys(genreSort)[0]]);
  console.log(genreMap);

  return (
    <div className='my-genre-container'>
      <span>My Genre is</span>
      <span className='my-genre-genre'>House!</span>
    </div>
  );
};

export default MyGenre;

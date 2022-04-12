import React from "react";
import "./Artists.scss";

const Artists = props => {
  const names = [];
  const genres = [];
  const imgUrls = [];
  for (let i = 0; i < 50; i++) {
    names.push(props.following.artists.items[i].name);
    genres.push(props.following.artists.items[i].genres);
    imgUrls.push(props.following.artists.items[i].images[2].url);
  }
  const nameList = names.map(name => <li>{name}</li>);
  const genresList = genres.map(genre => <li>{genre}</li>);
  const imgUrlList = imgUrls.map(imgUrl => <li>{imgUrl}</li>);

  return (
    <div className='artists'>
      <div className='artists-title'>Your Following Artists List</div>
      <ul className='name-list'>{nameList}</ul>
      <ul className='genres-list'>{genresList}</ul>
      <ul className='img-url-list'>{imgUrlList}</ul>
    </div>
  );
};

export default Artists;

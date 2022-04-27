import React from "react";
import "./Artists.scss";

const Artists = props => {
  const names = [];
  const genres = [];
  const imgUrls = [];
  for (let i = 0; i < 50; i++) {
    names.push(props.following.artists.items[i].name);
    genres.push(props.following.artists.items[i].genres);
    // imgUrls.push(props.following.artists.items[i].images[2].url);
  }

  const renderArtist = () => {
    const result = [];
    for (let i = 0; i < 50; i++) {
      result.push(
        <div
          className='aritst'
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "100px",
            width: "500px",
          }}
          key={i}
        >
          <div
            className='artist-img'
            style={{
              margin: "10px",
            }}
            key={i + "-img"}
          >
            img
          </div>
          <div
            className='aritst-detail'
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              margin: "10px",
              textAlign: "left",
              width: "300px",
            }}
            key={i + "-detail"}
          >
            <div
              className='artist-name'
              style={{
                marginBottom: "5px",
                color: "#FFD365",
                fontSize: "25px",
              }}
              key={i + "-name"}
            >
              {names[i]}
            </div>
            <div className='artist-genres' key={i + "-genres"}>
              {genres[i]}
            </div>
          </div>
        </div>
      );
    }
    return result;
  };

  return (
    <div className='artists'>
      <div className='artists-title'>Your Following Artists List</div>

      {renderArtist()}
    </div>
  );
};

export default Artists;

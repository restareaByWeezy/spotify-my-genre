import React from "react";
import "./Artists.scss";

const Artists = props => {
  // console.log(props.items);
  const renderArtist = () => {
    return props.items.map((item, index) => {
      return (
        <div className='artist' key={index}>
          {item?.images[0]?.url ? (
            <img
              src={item.images[0].url}
              className='artist-img'
              key={index + "-img"}
            />
          ) : (
            <div>img</div>
          )}
          <div className='artist-detail' key={index + "-detail"}>
            <div className='artist-name' key={index + "-name"}>
              {item.name}
            </div>
            <div className='artist-genres' key={index + "-genres"}>
              {item.genres}
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className='artists'>
      <div className='artists-title'>Your Following Artists List</div>
      {renderArtist()}
    </div>
  );
};

export default Artists;

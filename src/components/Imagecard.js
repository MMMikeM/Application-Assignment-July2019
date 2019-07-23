import React from "react";

const Imagecard = props => {
  const url = props.imgcard.urls.regular;
  const detail = props.imgcard.description;
  return (
    <div className="block">
      <figure>
        <img src={url} alt={detail} />
      </figure>
    </div>
  );
};

export default Imagecard;
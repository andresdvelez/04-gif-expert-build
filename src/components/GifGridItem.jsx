import React from "react";

const GifGridItem = ({ title, url }) => {
  return (
    <li className='card animate__animated animate__fadeInRight'>
            <img src={url} alt={title} />
            <p>{title}</p>
    </li>
  );
};

export default GifGridItem;

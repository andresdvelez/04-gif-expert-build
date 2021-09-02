// import { useEffect, useState } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const {data:images,loading} = useFetchGifs(category)

  

  return (
    <>
      <h1 className='animate__animated animate__fadeIn'>{category}</h1>
      {loading && <p className='animate__animated animate__flash'>loading</p>}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;

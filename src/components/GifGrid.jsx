import {useEffect} from "react";

const GifGrid = ({ category }) => {

    useEffect(() => {
      getGifs()
    }, [])
    const getGifs = async () => {
      const url =
        "https://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=Tzy6JTEccgTMVqVyWdoKaY3AOKUwjKy4";
      const res = await fetch(url);
      const {data} = await res.json()
  
      const gifs = data.map(img => {
          return {
              id: img.id,
              title: img.title,
              url: img.images.downsized_medium.url
          }
      })
  
      console.log(gifs)
  
    };

  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

export default GifGrid;

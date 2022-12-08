import React from "react";
import { useEffect, useState } from "react";
import listUrl from "./api";
import { Poster } from "./assets/Poster";

export function TVShows() {
  const [postersList, setPostersList] = useState([]);

  useEffect(() => {
    fetch(listUrl.tvShows) //fetching tvshow data
      .then((response) => response.json())
      .then((data) => setPostersList(data.results)) //assign data to ouput variable
      .catch((error) => {
        throw error;
      });
  }, []);

  if(postersList.length < 1){
      return <h1>Loading....</h1>
  } 

  return (
    <div className=" row">
      {postersList.slice(0,5).map((poster) => (
        <Poster
          key={poster.id}
          id={poster.id}
          mName={poster.name}
          mPhoto={poster.poster_path}
          airDate={poster.first_air_date}
          overview={poster.overview}
          voteAvg={poster.vote_average}
          isTVShow={true}
        /> 
      ))}
    </div>
  );
}

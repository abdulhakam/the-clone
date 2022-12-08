import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Poster } from "./../assets/Poster";
import listUrl from "./../api";
import "./../css/Styling.css";
import React from "react";

function GetTV(url){
const [obj, setObj] = useState({
  data: [],
  isLoading: true,
  hasError:false
})

  useEffect(()=>{
    fetch(url) //fetching tvshow data
      .then((response) => response.json())
      .then((data) => {
        setObj({
        data : data,
        isLoading : false,
        hasError:false
      })}) //assign data to ouput variable
      .catch((error) => setObj({
        data : [],
        isLoading :false,
        hasError:Boolean(error)
      }));
  },[url])

    return obj
}
export default function AiringTV() {
  const {hasError, isLoading, data} = GetTV(listUrl.tvShowsToday)
  const {results} = data

  if( isLoading){
      return <h1>Loading....</h1>
  }

  if(hasError){
      return <h1>Error occured....</h1>
  } 

  return (
    <Container fluid className=" section-poster-grid row">
        <h2 className=" text-light"> TV Shows Airing Today </h2>
      {results?.map((poster) => (
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
    </Container>
  );
}

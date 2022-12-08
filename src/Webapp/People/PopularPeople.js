import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import listUrl from "../api";
import "../css/Styling.css";
import axios from "axios";
import PersonPoster from "./PersonPoster"
import React from "react";

function GetPeople(url){
const [obj, setObj] = useState({
  data: [],
  isLoading: true,
  hasError:false
})

  useEffect(()=>{
    axios.get(url) //fetching tvshow data
      .then((response) => {
        setObj({
        data : response.data,
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
export default function PopularPeople() {
  const {hasError, isLoading, data} = GetPeople(listUrl.people)
  const { results } = data

  if( isLoading){
      return <h1>Loading....</h1>
  }

  if(hasError){
      return <h1>Error occured....</h1>
  } 

  return (
    <Container fluid className=" section-poster-grid row">
        {results?.map((poster) => (<PersonPoster
                key={poster.id}
                id={poster.id}
                pName={poster.name}
                pPhoto={poster.profile_path}
                pGender={poster.gender}
                popularity={poster.popularity}
                department={poster.known_for_department}/>
        ))}
    </Container>
  );
}

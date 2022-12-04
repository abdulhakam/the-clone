import React from "react";
import { Container } from "react-bootstrap";

export default function PersonPoster(props) {
  function genderSetter() {
    if (props.pGender === 1) {
      return "Female";
    } else return "male";
  }
  return (
    <Container className="col-2 d-inline m-3">
      <div className="p-1">
        <img
          width={250}
          height={500}
          src={`http://image.tmdb.org/t/p/original${props.profile_path}`}
          alt={props.pName}
        />
        <p>{props.pName}</p>
        <p>{props.department}</p>
        <p>{props.popularity}</p>
        <p>{genderSetter()}</p>
      </div>
    </Container>
  );
}

import React from "react";
import { Container } from "react-bootstrap";
import "./css/Styling.css";
import { Movies } from "./Movies";
import { TVShows } from "./TVShows";

export function HomePage() {
  return (
    <div className="homebody w-100">
      <Container fluid className="section-poster-grid">
        <h4 className=" text-light text-start"> Popular Movies </h4>
          <Movies />
        <h4 className=" text-light text-start"> Popular Series </h4>
          <TVShows />
      </Container>
    </div>
  );
}

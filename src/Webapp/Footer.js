import { Row } from "react-bootstrap";
import tmdblogo from "./assets/icons/tmdbr.svg";
import githublogo from "./assets/icons/github.png";
import React from "react";

export function Footer() {
  return (
    <div className=" bg-dark py-2 px-5">
      <Row className=" align-items-center">
        <div className=" col-10 col-sm-4">
          <p className=" text-light fw-light">Developed by:</p>
          <p className=" text-light"> Abdul Hakam</p>
        </div>
        <div className=" col-10 col-sm-4">
          <a href="#github">
            <p className="text-light">Source code: </p>
            <img
              width={64}
              height={64}
              className=" img-fluid"
              src={githublogo}
              alt="github"
            />
          </a>
        </div>
        <div className=" col-10 col-sm-4">
          <p className=" text-light fw-light"> Backend api provided by:</p>
          <img width={64} height={64} src={tmdblogo} alt="the movie database" />
          <p className=" text-light fw-light"> The Movie Database</p>
        </div>
      </Row>
    </div>
  )
}

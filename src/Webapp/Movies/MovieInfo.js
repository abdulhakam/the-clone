import "../css/MovieInfo.css";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { main_url, key_string } from "../api.js";

function GetMovieInfo(url) {
  const [obj, setObj] = useState({
    data: [],
    isLoading: true,
    hasError: false,
  });

  useEffect(() => {
    fetch(url) //fetching tvshow data
      .then((response) => response.json())
      .then((data) => {
        setObj({
          data: data,
          isLoading: false,
          hasError: false,
        });
      }) //assign data to ouput variable
      .catch((error) =>
        setObj({
          data: [],
          isLoading: false,
          hasError: Boolean(error),
        })
      );
  }, [url]);
  return obj;
}

export default function MovieInfo() {
  const { movieId } = useParams();
  const getterUrl = main_url + "/movie/" + movieId + key_string;

  const { hasError, isLoading, data } = GetMovieInfo(getterUrl);
  const rs = data;

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (hasError) {
    return <h1>Error occured....</h1>;
  }

  return (
    <Container fluid className=" all_body">
      <Container>
      {console.log(rs)}
      <Row className=" mt-3">
        <Col>
          <h1>{rs.original_title}</h1>
          <h4>{rs.tagline}</h4>
          <h5 className=" mt-3">Status: {rs.status}</h5>
          <h5> Release date: {rs.release_date}</h5>
          <h5> Original Language: </h5>
          <div className="tag" title="Original Language">
            {rs.original_language}
          </div>
          <h5>Genres:</h5>
          <span>
            {rs.genres.map((genrs) => {
              return <div className="tag">{genrs.name}</div>;
            })}
          </span>
          <h5>Overview:</h5>
          <p>{rs.overview}</p>
        </Col>
        <Col>
          <h6> Rating: {rs.vote_average}/10</h6>
          <img
            className="poster"
            width={500}
            src={`https://image.tmdb.org/t/p/w500${rs.poster_path}`}
            alt={rs.title}
          />
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

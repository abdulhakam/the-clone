import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./../css/Poster.css"
export function Poster(props) {

  const navigate = useNavigate()
  function dateType(){
    if (props.airDate !== undefined) {
      return ("Air Date: " + props.airDate);
    } else {
      return ("Release Date: " + props.releaseDate);
    }
  }

  function goToInfo(id,isTV){
    if (isTV===true){
      navigate(`/tv/${id}`);
    } else {
    navigate(`/movies/${id}`);
  }
  }

  return (
    <Container className=" col-2 d-inline m-3">
      <div className="makedis">
        <div className="overlay">
          <p> {props.overview.slice(0,250)}... </p>
          <Button className="" onClick={() => goToInfo(props.id,props.isTVShow)}> More Info </Button>
        </div>
        <img
          width={220}
          height={300}
          src={`https://image.tmdb.org/t/p/w500${props.mPhoto}`}
          alt={props.mName}
        />
        
        <h6>{props.mName}</h6>
        <p id="dateType">{dateType()}</p>
        <p>Vote Average: {props.voteAvg}</p>
      </div>
    </Container>
  );
}

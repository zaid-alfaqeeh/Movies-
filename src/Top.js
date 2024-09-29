import "./film.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Show from "./Show";
export default function Top() {
  const { id } = useParams();
  const [description, setDescription] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDescription(data);
      });
  }, [id]);
  let src = `https://image.tmdb.org/t/p/w500${description.backdrop_path}`;

  let num = description.vote_average;
  const rate = num;
  num = num / 2;
  num = Math.round(num);
  function star() {
    if (num == 5) {
      return (
        <svg width="150" height="30" viewBox="0 0 150 30">
          <polygon
            className="star"
            points="10,0 12.5,7 20,7 13.5,11 15,18 10,14 5,18 6.5,11 0,7 7.5,7"
          />
          <polygon
            className="star"
            points="40,0 42.5,7 50,7 43.5,11 45,18 40,14 35,18 36.5,11 30,7 37.5,7"
          />
          <polygon
            className="star"
            points="70,0 72.5,7 80,7 73.5,11 75,18 70,14 65,18 66.5,11 60,7 67.5,7"
          />
          <polygon
            className="star"
            points="100,0 102.5,7 110,7 103.5,11 105,18 100,14 95,18 96.5,11 90,7 97.5,7"
          />
          <polygon
            className="star"
            points="130,0 132.5,7 140,7 133.5,11 135,18 130,14 125,18 126.5,11 120,7 127.5,7"
          />
        </svg>
      );
    } else if (num == 4) {
      return (
        <svg width="150" height="30" viewBox="0 0 150 30">
          <polygon
            className="star"
            points="40,0 42.5,7 50,7 43.5,11 45,18 40,14 35,18 36.5,11 30,7 37.5,7"
          />
          <polygon
            className="star"
            points="70,0 72.5,7 80,7 73.5,11 75,18 70,14 65,18 66.5,11 60,7 67.5,7"
          />
          <polygon
            className="star"
            points="100,0 102.5,7 110,7 103.5,11 105,18 100,14 95,18 96.5,11 90,7 97.5,7"
          />
          <polygon
            className="star"
            points="130,0 132.5,7 140,7 133.5,11 135,18 130,14 125,18 126.5,11 120,7 127.5,7"
          />
        </svg>
      );
    } else if (num == 3)
      return (
        <svg width="150" height="30" viewBox="0 0 150 30">
          <polygon
            className="star"
            points="40,0 42.5,7 50,7 43.5,11 45,18 40,14 35,18 36.5,11 30,7 37.5,7"
          />
          <polygon
            className="star"
            points="70,0 72.5,7 80,7 73.5,11 75,18 70,14 65,18 66.5,11 60,7 67.5,7"
          />
          <polygon
            className="star"
            points="100,0 102.5,7 110,7 103.5,11 105,18 100,14 95,18 96.5,11 90,7 97.5,7"
          />
        </svg>
      );
    else if (num == 2)
      return (
        <svg width="150" height="30" viewBox="0 0 150 30">
          <polygon
            className="star"
            points="40,0 42.5,7 50,7 43.5,11 45,18 40,14 35,18 36.5,11 30,7 37.5,7"
          />
          <polygon
            className="star"
            points="70,0 72.5,7 80,7 73.5,11 75,18 70,14 65,18 66.5,11 60,7 67.5,7"
          />
        </svg>
      );
    else
      return (
        <svg width="150" height="30" viewBox="0 0 150 30">
          <polygon
            className="star"
            points="40,0 42.5,7 50,7 43.5,11 45,18 40,14 35,18 36.5,11 30,7 37.5,7"
          />
        </svg>
      );
  }
  return (
    <>
      <div className="bback">
        <div className="back" style={{ backgroundImage: `url(${src})` }}>
          <div className="Top">
            <div className="leftSide">
              <img src={src} />
            </div>
            <div className="rightSide">
              <h1>{description.original_title}</h1>
              <h4>{description.overview}</h4>
              <span>Date:{description.release_date} </span>
              <br></br>
              <span>
                Rating:
                {rate}
                {star()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

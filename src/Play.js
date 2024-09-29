import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function Play() {
  const { id } = useParams();
  const [description, setDescription] = useState({});
  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setTrailer(data.results);
      });
      
  }, [id]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDescription(data);
      });
  }, [id]);
  let trailerUrl = "";
  const trail = trailer.filter((event) => {
    if (event.type == "Trailer" && event.site == "YouTube") {
      trailerUrl = `https://www.youtube.com/embed/${event.key}?autoplay=1&mute=0&loop=1&controls=1&showinfo=0&playlist=${event.key}`;
    }
  });
  return (
    <>
      <div className="videoContainer">
        <iframe src={trailerUrl} allowFullScreen></iframe>
      </div>
      <div className="playSection">
        <div className="leftPlay">
          <h1>{description.title}</h1>
          <h5>{description.overview}</h5>
        </div>
        <div className="rightPlay">
          <button className="play " title="this is education page">
            Play
          </button>
          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-youtube playSvg"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
              <br></br>
              Trailer
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-plus playSvg"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <br></br>
              My List
            </li>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-list-stars playSvg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"
                />
                <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.28.28 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.27.27 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.28.28 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.27.27 0 0 0 .259-.194z" />
              </svg>
              <br></br>
              {description.vote_average}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

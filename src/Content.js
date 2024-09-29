import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Top from "./Top";
export default function Content({
  title,
  category,
  Cuscontent = false,
  conCus = "",
  ClassName,
}) {
  const [Data, setData] = useState([]);
  const [ID, setId] = useState();
  useEffect(() => {
    const request = () => {
      if (!Cuscontent) {
        fetch(`${category}?api_key=${process.env.REACT_APP_API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data.results);
            
          });
      } else {
        fetch(
          `${category}?api_key=${process.env.REACT_APP_API_KEY}${conCus}${1}`
        )
          .then((response) => response.json())
          .then((data) => {
            setData((Data) => [...Data, ...data.results]);
          });
      }
    };
    request();
  }, []);
  const Result = Data.map((event, i) => {
    const src = `https://image.tmdb.org/t/p/w500${event.poster_path}`;
    if(event.id!=4478)
    return (
      <div
        key={i}
        className="card"
        id={event.id}
        onMouseEnter={(e) => click(e.currentTarget.id)}
        onClick={(e) => Click(e.currentTarget.id)}
      >
        <img className="card-img" src={src} alt="Card image cap" />
      </div>
    );
  });
  const navigate = useNavigate();
  const path = window.location.pathname;
  function Click(id) {
    if (!path.includes("Series")) navigate(`/movie/${id}`);
  }

  function click(id) {
    if (path.includes("movies")) navigate(`/movies/${id}`);
    else if (path.includes("Series")) navigate(`/Series`);
    else if (path.includes("Show")) navigate(`/Show/${id}`);
    else if (path.includes("/")) navigate(`/${id}`);
  }
  function move() {
    setId(ClassName);
    const test = document.querySelectorAll(".content")[ID];
    if (test != undefined) {
      test.setAttribute("id", ID);
      const scroll = document.getElementById(ID);
      scroll.scrollLeft -= 130;
    }
  }
  function moveR() {
    setId(ClassName);
    const test = document.querySelectorAll(".content")[ID];
    if (test != undefined) {
      test.setAttribute("id", ID);
      const scroll = document.getElementById(ID);
      scroll.scrollLeft += 130;
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <div className="line">
        <button className="next" style={{ margin: "auto" }} onClick={move}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
          </svg>
        </button>

        <div className="content">{Result}</div>
        <button className="next" style={{ margin: "auto" }} onClick={moveR}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
          </svg>
        </button>
      </div>
    </>
  );
}

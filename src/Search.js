import "./film.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Search() {
  const [search, setSearch] = useState([]);
  const [input, setInput] = useState("");
  const [empty, setEmpty] = useState(false);
  const [display, setDiplay] = useState("none");
  useEffect(() => {
    if (input.length != 0)
      fetch(
        `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=${process.env.REACT_APP_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results.genre_ids != 10749 || data.results.adult == false)
            setSearch(data.results);
          if (display && input.length > 0) {
            setDiplay("flex");
          }
          if (data.results.length == 0) setEmpty(true);
          else setEmpty(false);
        });
  }, [input]);
  let src = "";
  const sugest = search.map((event, i) => {
    return (
      <li
        key={i}
        id={event.original_title}
        onClick={(e) => Suggest(e.currentTarget.id)}
      >
        {event.original_title}
      </li>
    );
  });
  const Result = search.map((event, i) => {
    src = `https://image.tmdb.org/t/p/w500${event.poster_path}`;
    if (!src.includes("null")) {
      return (
        <div
          key={i}
          id={event.id}
          className="card"
          onClick={(e) => Play(e.currentTarget.id)}
        >
          <img className="card-img" src={src} alt="Card image cap" />
        </div>
      );
    }
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      setDiplay("none");
      event.preventDefault();
    }
  });
  function Suggest(sug) {
    setInput(sug);
    setDiplay("none");
  }
  const navigate = useNavigate();
  function Play(id) {
    navigate(`/movie/${id}`);
  }
  return (
    <div>
      <form>
        <div className="Form">
          <input
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
            }}
            placeholder="Search..."
          />
        </div>
      </form>
      {display == "flex" ? (
        input.length > 0 ? (
          <div className="fsuggest" id="hidden">
            <div className="suggest">{sugest}</div>
          </div>
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
      {!empty ? (
        <div className="Customcontent">{Result}</div>
      ) : (
        <div className="empty">
          <h1>No results found.</h1>
        </div>
      )}
    </div>
  );
}

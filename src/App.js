import "./App.css";
import Header from "./Header";
import Show from "./Show";
import Top from "./Top";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Shows from "./Shows";
import Background from "./Background";
import Search from "./Search";
import Movie from "./Movie";
import Movieshow from "./Movieshow";
import Series from "./Series";
function App() {
  return (
    <div className="App">
      <Header></Header>
      
      <Routes>
        <Route path="/:id" element={<Shows />}></Route>
        <Route path="/movie/:id" element={<Background />} />
        <Route path="/" element={<Show />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/movies/:id" element={<Movieshow />} />
        <Route path="/Series" element={<Series />} />
      </Routes>
    </div>
  );
}
export default App;

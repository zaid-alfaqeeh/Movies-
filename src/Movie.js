import Content from "./Content";
import Top from "./Top";
export default function Movie() {
  return (
    <>
      <Content
        title="Trending Movies Today"
        category={"https://api.themoviedb.org/3/trending/movie/day"}
        ClassName="0"
      />
      <Content
        title="Movies now playing"
        category={"https://api.themoviedb.org/3/movie/now_playing"}
        ClassName="1"
      />
      <Content
        title="Marvel Studios"
        category={"https://api.themoviedb.org/3/company/420/movies"}
        ClassName="2"
      />
      <Content
        title="Pixar"
        category={"https://api.themoviedb.org/3/company/3/movies"}
        ClassName="3"
      />
      <Content
        title="Lucasfilm"
        category={"https://api.themoviedb.org/3/company/1/movies"}
        ClassName="4"
      />
      <Content
        title="Paramount"
        category={"https://api.themoviedb.org/3/company/4/movies"}
        ClassName="5"
      />
    </>
  );
}

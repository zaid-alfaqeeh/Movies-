import "./film.css";
import Content from "./Content";
export default function Show() {
  return (
    <>
      <Content
        title="Movies Trending Today"
        category={"https://api.themoviedb.org/3/trending/movie/week"}
        ClassName="0"
      />
      <Content
        title="Top Rated Movies"
        category={"https://api.themoviedb.org/3/movie/top_rated"}
        ClassName="1"
      />
      <Content
        title="NETFLIX"
        category={"https://api.themoviedb.org/3/discover/movie"}
        ClassName="2"
        Cuscontent={true}
        conCus="&with_watch_providers=8&watch_region=US&sort_by=popularity.desc&page="
      />
      <Content
        title="Apple TV+"
        category={"https://api.themoviedb.org/3/discover/movie"}
        ClassName="3"
        Cuscontent={true}
        conCus="&with_watch_providers=350&watch_region=US&sort_by=popularity.desc&page="
      />
      <Content
        title="Disney+"
        category={"https://api.themoviedb.org/3/discover/movie"}
        ClassName="4"
        Cuscontent={true}
        conCus="&with_watch_providers=337&watch_region=US&sort_by=popularity.desc&page="
      />
    </>
  );
}

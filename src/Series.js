import Content from "./Content";
export default function Series() {
  return (
    <>
      <Content
        title="Trending Series"
        category={"https://api.themoviedb.org/3/trending/tv/day"}
        ClassName="0"
      />
      <Content
        title="Popular Series"
        category={"https://api.themoviedb.org/3/tv/popular"}
        ClassName="1"
      />
      <Content
        title="Top Rated Series"
        category={"https://api.themoviedb.org/3/tv/top_rated"}
        ClassName="2"
      />
    </>
  );
}

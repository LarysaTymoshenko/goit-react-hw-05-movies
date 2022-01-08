import { useEffect, useState } from "react";
import { fetchMovies } from "../../service/Api";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Form from "../Form/Form";

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const asyncFetch = async () => {
      const movies = await fetchMovies(`/trending/movie/week?page=${page}`);
      setMovies(movies);
    };

    asyncFetch();
  }, [page]);
  return (
    <>
      <Form />
      {movies && (
        <InfiniteScroll
          dataLength={50}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ overflow: "hidden" }}
          loader={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000}
            />
          }
        >
          {" "}
        </InfiniteScroll>
      )}
    </>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import {
  useLocation,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Form from "../../component/Form/Form";
import { fetchMovies } from "../../service/api";
import Movies from "../../component/Movies/Movies";

export default function MoviesPage() {
  const location = useLocation();
  const history = useHistory();
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const asyncFetch = async () => {
      const movies = await fetchMovies(
        `search/movie?query=${query}&page=${page}`
      );
      setMovies(movies);
    };

    asyncFetch();
  }, [page, query]);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <Form onSubmit={onFormSubmit} />
      {movies && (
        <InfiniteScroll
          dataLength={movies.total_results}
          next={() => setPage(page + 1)}
          hasMore={true}
          style={{ textAlign: "center" }}
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
          {""}
          <Movies movies={movies.results} />
        </InfiniteScroll>
      )}
    </>
  );
}

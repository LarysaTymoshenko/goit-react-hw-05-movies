import { useState, useEffect, Suspense } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { fetchMovies } from "../../service/Api";
import MovieDetail from "./MoviDetail/MovieDetail";
import Button from "../../component/Button/Button";

const MovieDetailsPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { path } = useRouteMatch();
  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const movie = await fetchMovies(`movie/${movieId}`);
      setMovie(movie);
    };
    asyncFetch();
  }, [movieId]);

  const onBackClick = () => {
    if (location && location.state && location.state.from) {
      const { pathname, search } = location.state.from;
      history.push(`${pathname}${search}`);

      return;
    }
    history.push("/");
  };

  return (
    <>
      <Button onBackClick={onBackClick} />

      {movie && <MovieDetail movie={movie} />}

      <Suspense fallback={<Loader />}>
        <Route path={`${path}/cast`}>{/* <CastPage /> */}</Route>
        <Route path={`${path}/reviews`}>{/* <ReviewsPage /> */}</Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;

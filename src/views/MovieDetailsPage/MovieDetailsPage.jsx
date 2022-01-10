import { useState, useEffect, Suspense, lazy } from "react";
import {
  useParams,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { fetchMovies } from "../../service/api";

const Reviews = lazy(() => import("../../component/Reviews/Reviews.jsx"));
const Cast = lazy(() => import("../../component/Cast/Cast.jsx"));
const Button = lazy(() => import("../../component/Button/Button.jsx"));
const MovieDetail = lazy(() => import("./MoviDetail/MovieDetail.jsx"));

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
      <Suspense fallback={<Loader />}>
        <Button onBackClick={onBackClick} />

        {movie && <MovieDetail movie={movie} />}

        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;

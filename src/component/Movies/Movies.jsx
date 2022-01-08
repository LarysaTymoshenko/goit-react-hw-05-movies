import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import img from "../../images/nofoto.jpg";
import s from "./Movies.module.css";

const Movies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.GalleryList}>
        {movies.map((movie) => (
          <li className={s.GalleryListItem} key={movie.id}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
              className={s.link}
            >
              {movie.poster_path ? (
                <img
                  className={s.GalleryListImg}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              ) : (
                <img
                  className={s.GalleryListImg}
                  src={img}
                  alt={movie.title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              )}

              <div className={s.GalleryListCard}>
                <h3 className={s.GalleryListTitle}>{movie.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
export default Movies;

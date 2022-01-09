import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import img from "../../images/nofoto.jpg";
import slug from "slugify";
import s from "./Movies.module.css";

const Movies = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      <ul className={s.galleryList}>
        {movies.map(({ id, poster_path, title }) => (
          <li className={s.galleryListItem} key={id}>
            <Link
              to={{
                pathname: `/movies/${slug(`${title}-${id}`)}`,
                state: { from: location },
              }}
              className={s.link}
            >
              {poster_path ? (
                <img
                  className={s.galleryListImg}
                  src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                  alt={title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              ) : (
                <img
                  className={s.galleryListImg}
                  src={img}
                  alt={title}
                  loading="lazy"
                  width="274"
                  height="398"
                />
              )}

              <div className={s.galleryListCard}>
                <h3 className={s.galleryListTitle}>{title}</h3>
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

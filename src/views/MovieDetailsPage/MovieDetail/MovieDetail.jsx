import { NavLink, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import noFoto from '../../../images/nofoto.jpg';
import s from './MovieDetail.module.css';

export default function MovieDetails({ movie }) {
  const { url } = useRouteMatch();
  return (
    <div className={s.movie}>
      <div className={s.imageBox}>
        <img
          className={s.image}
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : noFoto
          }
          alt={movie.title}
          loading="lazy"
        />
      </div>
      <div className={s.infoBox}>
        <div className={s.infoAbout}>
          <h3 className={s.title}>
            {movie.title ? movie.title : movie.name}
            <span className={s.year}>({movie.release_date.slice(0, 4)})</span>
          </h3>
          <p className={s.rating}>
            VOTE / VOTES:
            <span className={s.result}>
              {movie.vote_average} / {movie.vote_count}
            </span>
          </p>
          <ul className={s.genres}>
            GENRES:
            {movie.genres.map(({ id, name }) => (
              <li key={id} className={s.genre}>
                {name}
              </li>
            ))}
          </ul>
          <h4 className={s.about}>ABOUT:</h4>
          <p className={s.text}>{movie.overview}</p>
        </div>
        <div className={s.infoMore}>
          <ul className={s.additional}>
            <li className={s.additionalItem}>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={`${url}/cast`}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.additionalItem}>
              <NavLink
                className={s.link}
                activeClassName={s.activeLink}
                to={`${url}/reviews`}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

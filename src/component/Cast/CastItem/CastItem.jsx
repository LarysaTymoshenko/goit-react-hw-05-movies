import PropTypes from "prop-types";
import s from "../Cast.module.css";
import img from "../../../images/nofoto.jpg";

export default function Cast({ castList }) {
  return (
    <ul className={s.cardList}>
      {castList.cast.map(({ id, name, character, profile_path }) => (
        <li key={id} className={s.card}>
          <div className={s.nameBox}>
            <h3 className={s.name}>{name}</h3>
            <h4 className={s.char}>({character})</h4>
          </div>
          <img
            className={s.img}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : img
            }
            alt={name}
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  castList: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

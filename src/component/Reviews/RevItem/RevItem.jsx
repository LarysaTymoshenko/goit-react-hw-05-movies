import PropTypes from "prop-types";
import s from "../Reviews.module.css";
import img from "../../../images/nofoto.jpg";

export default function RevItem({ reviews }) {
  return (
    <>
      {reviews.results.map(
        ({
          id,
          author_details: { avatar_path, name },
          content,
          created_at,
        }) => (
          <li key={id} className={s.card}>
            <div className={s.revBox}>
              <h3 className={s.name}>{name}</h3>
              <p className={s.char}>
                {content}
                <span>{created_at}</span>
              </p>
            </div>
            <img
              className={s.img}
              src={avatar_path ? avatar_path.slice(1) : img}
              alt={name}
              loading="lazy"
            />
          </li>
        )
      )}
    </>
  );
}
RevItem.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

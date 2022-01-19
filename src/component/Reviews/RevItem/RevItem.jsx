import PropTypes from 'prop-types';
import s from '../Reviews.module.css';
import img from '../../../images/nofoto.jpg';

export default function RevItem({ reviews }) {
  const {
    id,
    author,
    author_details: { avatar_path },
    content,
  } = reviews;

  return (
    <li key={id} className={s.card}>
      <img
        className={s.img}
        src={avatar_path ? avatar_path.slice(1) : img}
        alt={author}
        loading="lazy"
      />
      <h3 className={s.name}>{author}</h3>
      <p className={s.char}>{content}</p>
    </li>
  );
}
RevItem.propTypes = {
  reviews: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

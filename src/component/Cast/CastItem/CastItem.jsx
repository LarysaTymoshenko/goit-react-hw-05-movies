import PropTypes from "prop-types";
import s from "../Cast.module.css";
import img from "../../../images/nofoto.jpg";

const CastItem = ({ data }) => {
  return (
    <>
      <li className={s.card}>
        {data.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
            alt={data.name}
            width="200px"
            height="250px"
          />
        ) : (
          <img src={img} alt={data.name} width="200px" height="250px" />
        )}
        <h4 className={s.name}>{data.name}</h4>
        <p className={s.character}>{data.character}</p>
      </li>
    </>
  );
};
CastItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default CastItem;

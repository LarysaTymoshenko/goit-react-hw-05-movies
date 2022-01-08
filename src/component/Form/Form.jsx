import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import s from "./Form.module.css";

const Form = ({ handleSubmit, searchName, handleNameChange }) => {
  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        className={s.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
        value={searchName}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.searchFormButton} aria-label="search">
        <FiSearch />
      </button>
    </form>
  );
};
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  searchName: PropTypes.string.isRequired,
  handleNameChange: PropTypes.func.isRequired,
};
export default Form;

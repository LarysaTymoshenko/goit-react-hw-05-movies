import { useState } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from "./Form.module.css";

const Form = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleNameChange = (evt) => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      toast.warning("Enter searcher");
      return;
    }

    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={s.searchForm} onSubmit={handleSubmit}>
      <input
        className={s.searchFormInput}
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Search movies"
        value={query}
        onChange={handleNameChange}
      />
      <button type="submit" className={s.searchFormButton} aria-label="search">
        <FiSearch />
      </button>
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default Form;

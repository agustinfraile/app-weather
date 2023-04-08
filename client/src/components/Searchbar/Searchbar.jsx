import { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../../redux/actions";

import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getWeather(value));
    setValue("");
  };

  return (
    <form className={styles.formContainer}>
      <input
        className={styles.formContainer_input}
        type="text"
        placeholder="Buscar ciudad..."
        value={value}
        onChange={handleChange}
      />
      <button
        className={styles.formContainer_submit}
        type="submit"
        onClick={handleSubmit}
        >
        Buscar
      </button>
    </form>
  );
};

export default Searchbar;

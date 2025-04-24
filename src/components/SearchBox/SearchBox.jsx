import { useId } from "react";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const id = useId();

  const dispatch = useDispatch();
  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <input
      onChange={handleSearch}
      className={css.input}
      name="value"
      id={id}
      type="search"
      placeholder="Find contacts by name"
    />
  );
};

export default SearchBox;

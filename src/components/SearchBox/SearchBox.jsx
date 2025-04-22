import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  const filter = useSelector((state) => selectFilter(state).name);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      id={id}
      className={css.input}
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={handleSearch}
    />
  );
};

export default SearchBox;

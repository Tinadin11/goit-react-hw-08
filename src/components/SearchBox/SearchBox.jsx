import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectFilter } from "../../redux/filtersSlice";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const id = useId();
  const dispatch = useDispatch();

  const filter = useSelector((state) => selectFilter(state).value);

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

// import { useId } from "react";
// import { changeFilter } from "../../redux/filtersSlice";
// import { useDispatch } from "react-redux";

// import css from "./SearchBox.module.css";

// const SearchBox = () => {
//   const id = useId();
//   const dispatch = useDispatch();
//   const handleSearch = (event) => {
//     dispatch(changeFilter(event.target.value));
//   };

//   return (
//     <input
//       className={css.input}
//       type="text"
//       placeholder="Find contacts by name"
//       value={filter}
//       onChange={handleSearch}
//     />
//   );
// };

// export default SearchBox;

// import css from "./SearchBox.module.css";

// export default function SearchBox({ filter, onFilterChange }) {
//   return (
//     <input
//       className={css.input}
//       type="text"
//       placeholder="Find contacts by name"
//       value={filter}
//       onChange={(event) => onFilterChange(event.target.value)}
//     />
//   );
// }

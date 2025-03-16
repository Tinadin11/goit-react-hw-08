import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Find contacts by name"
      value={filter}
      onChange={(event) => onFilterChange(event.target.value)}
    />
  );
}

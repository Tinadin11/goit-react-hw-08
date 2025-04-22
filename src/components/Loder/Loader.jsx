import css from "./Loader.module.css";

function Loader() {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}></div>
    </div>
  );
}

export default Loader;

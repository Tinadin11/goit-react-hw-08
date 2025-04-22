import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.textError}>
      {" "}
      Oh no... Something's wrong... Try again, please!
    </p>
  );
}

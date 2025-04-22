import css from "./ErrorMessage.module.css";

export default function ErrorMessage() {
  return (
    <p className={css.textError}> Something's wrong... Try again, please!</p>
  );
}

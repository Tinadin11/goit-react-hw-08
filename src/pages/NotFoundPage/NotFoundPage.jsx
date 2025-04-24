import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div className={css.container}>
      <h3 className={css.title}>404 - page not found</h3>
      <p className={css.text}>
        Return to{" "}
        <Link className={c.link} to="/">
          Home
        </Link>
      </p>
    </div>
  );
}

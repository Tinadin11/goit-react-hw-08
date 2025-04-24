import css from "./PageTitle.module.css";
import clsx from "clsx";

export default function PageTitle({ children, className = "" }) {
  return <h1 className={clsx(css.heading, className)}>{children}</h1>;
}

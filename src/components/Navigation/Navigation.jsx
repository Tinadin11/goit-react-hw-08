import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { PiHouse } from "react-icons/pi";
import { IoMdContacts } from "react-icons/io";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.navBox}>
      <nav className={css.nav}>
        <NavLink className={buildLinkClass} to="/">
          <PiHouse />
          <span>Home</span>
        </NavLink>
        {isLoggedIn && (
          <NavLink className={buildLinkClass} to="/contacts">
            <IoMdContacts />
            <span> Contacts</span>
          </NavLink>
        )}
      </nav>
    </div>
  );
}

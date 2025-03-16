import { MdPerson, MdPhone } from "react-icons/md";
import css from "./Contact.module.css";
export default function Contact({ id, name, number, onDeleteContact }) {
  return (
    <div className={css.contact}>
      <div className={css.contactDetails}>
        <p className={css.name}>
          <MdPerson className={css.icon} /> {name}
              </p>

        <p className={css.number}>
          <MdPhone className={css.icon} />
          <a href={`tel:${number}`} className={css.phoneLink}>
            {number}
          </a>
        </p>

        {/* <p className={css.number}>
          <MdPhone className={css.icon} /> {number}
        </p> */}
      </div>
      <button className={css.btnDel} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
}

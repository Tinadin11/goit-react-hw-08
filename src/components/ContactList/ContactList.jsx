import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectError,
  selectLoading,
} from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import Loader from "../Loder/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

import css from "./ContactList.module.css";

const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {!loading && !error && contacts.length > 0
        ? contacts.map((contact) => (
            <li className={css.item} key={contact.id}>
              <Contact {...contact} />
            </li>
          ))
        : !loading && !error && <p>No contacts available</p>}
      {error && <ErrorMessage />}
    </ul>
  );
};

export default ContactList;

// import Contact from "../Contact/Contact";
// import css from "./ContactList.module.css";

// export default function ContactList({ contacts, onDeleteContact }) {
//   return (
//     <ul className={css.list}>
//       {contacts.map(({ id, name, number }) => (
//         <li className={css.item} key={id}>
//           <Contact
//             id={id}
//             name={name}
//             number={number}
//             onDeleteContact={onDeleteContact}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

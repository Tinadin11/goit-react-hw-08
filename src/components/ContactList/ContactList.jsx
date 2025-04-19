import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filtersSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector(selectFilter).toLowerCase();

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <Contact id={id} name={name} number={number} />
        </li>
      ))}
    </ul>
  );
}

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

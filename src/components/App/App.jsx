import { useState, useEffect } from "react";
import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import contactsData from "../../contact.json";
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Перевірка наявності контактів в localStorage
    const savedContacts = localStorage.getItem("contacts");

    if (savedContacts) {
      // Якщо наявні, то завантажуємо їх з localStorage
      setContacts(JSON.parse(savedContacts));
    } else {
      // якщо відсутні контакти то використовуємо дані з contact.json
      setContacts(contactsData);
    }
  }, []);

  useEffect(() => {
    // Оновлюємо localStorage при зміні контактів
    if (contacts.length > 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${newContact.name} is already in contacts!`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter(({ id }) => id !== contactId)
    );
  };

  return (
    <div className={css.box}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox filter={filter} onFilterChange={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
}

// import { useState, useEffect } from "react";
// import ContactList from "../ContactList/ContactList";
// import ContactForm from "../ContactForm/ContactForm";
// import SearchBox from "../SearchBox/SearchBox";
// import contactsData from "../../contact.json";
// import css from "./App.module.css";

// export default function App() {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState("");

//   useEffect(() => {
//     if (contacts.length === 0) {
//       setContacts(contactsData);
//     }
//   }, [contacts]);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const addContact = (newContact) => {
//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter(({ id }) => id !== contactId)
//     );
//   };

//   return (
//     <div>
//       <h1 className={css.title}>Phonebook</h1>
//       <ContactForm onAddContact={addContact} />
//       <SearchBox filter={filter} onFilterChange={setFilter} />
//       <ContactList
//         contacts={filteredContacts}
//         onDeleteContact={deleteContact}
//       />
//     </div>
//   );
// }

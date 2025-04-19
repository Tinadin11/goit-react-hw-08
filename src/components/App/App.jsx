import ContactList from "../ContactList/ContactList";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;

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
//     const savedContacts = localStorage.getItem("contacts");

//     if (savedContacts) {
//       setContacts(JSON.parse(savedContacts));
//     } else {
//       setContacts(contactsData);
//     }
//   }, []);

//   useEffect(() => {
//     if (contacts.length > 0) {
//       localStorage.setItem("contacts", JSON.stringify(contacts));
//     }
//   }, [contacts]);

//   const filteredContacts = contacts.filter((contact) =>
//     contact.name.toLowerCase().includes(filter.toLowerCase())
//   );

//   const addContact = (newContact) => {
//     const isDuplicate = contacts.some(
//       (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
//     );

//     if (isDuplicate) {
//       alert(`${newContact.name} is already in contacts!`);
//       return;
//     }

//     setContacts((prevContacts) => [...prevContacts, newContact]);
//   };

//   const deleteContact = (contactId) => {
//     setContacts((prevContacts) =>
//       prevContacts.filter(({ id }) => id !== contactId)
//     );
//   };

//   return (
//     <div className={css.box}>
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

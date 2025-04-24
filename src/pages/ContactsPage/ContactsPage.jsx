import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useSelector } from "react-redux";
import { selectError, selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./ContactsPage.module.css";
import { Toaster } from "react-hot-toast";

export default function ContactsPage() {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  return (
    <div className={css.contactsPage}>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      <SearchBox />
      <Toaster position="top-right" />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
    </div>
  );
}


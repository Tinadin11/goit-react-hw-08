import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import PageTitle from "../../components/PageTitle/PageTitle";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useSelector } from "react-redux";
import { selectIsError } from "../../redux/auth/selectors";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  const isError = useSelector(selectIsError);
  return (
    <div className={css.registerPage}>
      <PageTitle className={css.darkBlueTitle}>Register your account</PageTitle>
      <RegistrationForm />
      {isError && <ErrorMessage />}
    </div>
  );
}

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import toast from "react-hot-toast";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "The name must contain at least 3 characters")
    .max(50, "The name must contain at most 50 characters")
    .required("Required field"),
  number: Yup.string()
    .matches(/^\+?\d{0,15}$/, "Only numbers are allowed")
    .min(7, "The number must contain at least 7 digits")
    .max(15, "The number must contain at most 15 digits")
    .required("Required field"),
});
const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values))
      .then((result) => {
        toast.success(`Contact ${values.name} Successfully added!`);
        console.log("result: ", result);

        actions.setSubmitting(false);
        actions.resetForm();
      })
      .catch(() => {
        toast.error("Failed to add contact");
        actions.setSubmitting(false);
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.input}
              type="search"
              name="name"
              id={nameFieldId}
              autoComplete="name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css.inputContainer}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.input}
              type="search"
              name="number"
              id={numberFieldId}
              autoComplete="tel"
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>

          <button className={css.button} type="submit" disabled={isSubmitting}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

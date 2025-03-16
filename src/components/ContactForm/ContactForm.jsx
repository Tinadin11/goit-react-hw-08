import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const contactSchema = Yup.object({
  name: Yup.string()
    .min(3, "The name must contain at least 3 characters")
    .max(50, "The name must contain at most 50 characters")
    .required("Required field"),
  number: Yup.string()
    .matches(/^\d+$/, "Only numbers are allowed")
    .min(7, "The number must contain at least 7 digits")
    .max(15, "The number must contain at most 15 digits")
    .required("Required field"),
});

export default function ContactForm({ onAddContact }) {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };
    onAddContact(newContact);
    resetForm();
  };

  const fieldId = nanoid(); // Унікальний ідентифікатор для полів

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label className={css.label} htmlFor={fieldId + "name"}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={fieldId + "name"}
            autoComplete="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.inputContainer}>
          <label className={css.label} htmlFor={fieldId + "number"}>
            Number
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={fieldId + "number"}
            autoComplete="tel"
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}


//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onAdd({
//       id: Date.now(),
//       text: event.target.elements.text.value,
//     });
//     event.target.reset();
//   };
//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input className={css.field} type="text" name="text" />
//       <button className={css.btn} type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }

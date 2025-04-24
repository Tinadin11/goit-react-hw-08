import { useState } from "react";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { MdPerson, MdPhone } from "react-icons/md";
import EditForm from "../EditForm/EditForm"; // імпортуємо EditForm
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import css from "./Contact.module.css";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: contact.name,
    number: contact.number,
  });
  const [errors, setErrors] = useState({ name: "", number: "" });

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `"${contact.name}" will be deleted permanently.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00bcd4",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      dispatch(deleteContact(contact.id))
        .then(() => {
          Swal.fire({
            title: "Deleted!",
            text: `"${contact.name}" has been deleted.`,
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Error!",
            text: "There was a problem deleting the contact.",
            icon: "error",
            showConfirmButton: true,
          });
        });
    }
  };

  const handleUpdate = (updatedData) => {
    dispatch(updateContact({ id: contact.id, ...updatedData }))
      .unwrap()
      .then(() => {
        toast.success("The contact has been updated!");
        setIsEditing(false);
      })
      .catch(() => {
        toast.error("Error during update");
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "number" && !/^\+?\d{0,15}$/.test(value)) {
      setErrors({ ...errors, number: "Invalid phone number format" });
    } else {
      setErrors({ ...errors, number: "" });
    }
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setFormData({ name: contact.name, number: contact.number }); // скидаємо зміни
  };

  return (
    <div className={css.contact}>
      {isEditing ? (
        <EditForm
          initialData={formData}
          onChange={handleInputChange}
          onUpdate={handleUpdate}
          onCancel={handleCancelClick}
          errors={errors}
        />
      ) : (
        <>
          <div className={css.contactDetails}>
            <p className={css.name}>
              <MdPerson className={css.icon} /> {contact.name}
            </p>
            <p className={css.number}>
              <MdPhone className={css.icon} />
              <a href={`tel:${contact.number}`} className={css.phoneLink}>
                {contact.number}
              </a>
            </p>
          </div>
          <div className={css.buttons}>
            <button
              className={css.btnEdit}
              onClick={() => setIsEditing(true)}
              type="button"
            >
              Edit
            </button>
            <button className={css.btnDel} onClick={handleDelete} type="button">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;

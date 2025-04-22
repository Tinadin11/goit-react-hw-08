import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { MdPerson, MdPhone } from "react-icons/md";
import Swal from "sweetalert2";

import css from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  //питаю, чи дійсно користувач хоче видалити контак
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `"${name}" will be deleted permanently.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#00bcd4",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      dispatch(deleteContact(id));

      Swal.fire({
        title: "Deleted!",
        text: `"${name}" deleted.`,
        icon: "success",
        timer: 1000,
        showConfirmButton: false,
      });
    }
  };

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
      </div>
      <button className={css.btnDel} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

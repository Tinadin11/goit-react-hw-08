import { TextField } from "@mui/material";
import css from "./EditForm.module.css";

const EditForm = ({ initialData, onChange, onUpdate, onCancel, errors }) => {
  return (
    <div className={css.editForm}>
      <TextField
        className={css.input}
        name="name"
        label="Name"
        value={initialData.name}
        onChange={onChange}
        variant="outlined"
        fullWidth
      />
      <TextField
        className={css.input}
        name="number"
        label="Phone"
        value={initialData.number}
        onChange={onChange}
        variant="outlined"
        fullWidth
        error={!!errors.number}
        helperText={errors.number}
      />
      <div className={css.actions}>
        <button className={css.btnUpdate} onClick={() => onUpdate(initialData)}>
          Update
        </button>
        <button className={css.btnCancel} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditForm;

// import { TextField, Button } from "@mui/material";
// import css from "./EditForm.module.css";

// const EditForm = ({
//   formData,
//   setFormData,
//   errors,
//   handleInputChange,
//   handleUpdateClick,
//   handleCancelClick,
// }) => {
//   return (
//     <div className={css.inlineEditWrapper}>
//       <TextField
//         className={css.input}
//         label="Name"
//         variant="standard"
//         name="name"
//         value={formData.name}
//         onChange={handleInputChange}
//         autoComplete="name"
//       />
//       <TextField
//         className={css.input}
//         label="Phone"
//         variant="standard"
//         name="number"
//         value={formData.number}
//         onChange={handleInputChange}
//         error={!!errors.number}
//         helperText={errors.number}
//         autoComplete="tel"
//       />
//       <div className={css.editButtons}>
//         <Button
//           onClick={handleUpdateClick}
//           variant="contained"
//           size="small"
//           color="primary"
//           disabled={!!errors.number}
//         >
//           Update
//         </Button>
//         <Button
//           onClick={handleCancelClick}
//           variant="outlined"
//           size="small"
//           color="secondary"
//         >
//           Cancel
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default EditForm;

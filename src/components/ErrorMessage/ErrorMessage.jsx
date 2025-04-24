import Swal from "sweetalert2";

export default function ErrorMessage() {
  const showError = () => {
    Swal.fire({
      title: "🤔 Oops!",
      text: "Something's wrong... Try again, please!",
      confirmButtonText: "Ok",
    });
  };

  return <button onClick={showError}>Show Error</button>;
}

import { Slide } from "react-toastify";
// react toastify configuration for toasts
const Toast = (type, message) => {
    type(`${message}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
    });
};

export default Toast;

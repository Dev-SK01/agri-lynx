import { Slide } from "react-toastify";
// react toastify configuration for toasts
const Toast = (type, message) => {
    type(`${message}`);
};

export default Toast;

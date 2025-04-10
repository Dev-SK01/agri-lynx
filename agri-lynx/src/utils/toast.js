// react toastify configuration for toasts
const Toast = (type, message) => {
    type(`${message}`,{
        toastId:"toast"
    });
};

export default Toast;

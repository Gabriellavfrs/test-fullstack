import { toast, ToastOptions } from 'react-toastify';

export const useToaster = () => {
  const options: ToastOptions = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
  };

  const showError = (message: string) => {
    toast.error(message, options);
  };

  const showSuccess = (message: string) => {
    toast.success(message, options);
  };

  return {
    showError,
    showSuccess,
  };
};

import { toast } from 'react-toastify';

const SuccessMessage = (message) => {
    return toast.success(
        { message },
        {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );
};

const ErrorMessage = (message) => {
    return toast.error(
        { message },
        {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }
    );
};

export {SuccessMessage, ErrorMessage };

import { useContext } from 'react';
import { UserContext } from '../context';

const useUser = () => {
    const { userData, setUserData } = useContext(UserContext);

    const setUser = (data) => {
        setUserData(data);
        window.localStorage.setItem('userData', JSON.stringify(data));
    };

    const removeUser = () => {
        setUserData(null);
        localStorage.clear();
    };

    return { userData, setUser, setUserData, removeUser };
};

export default useUser;

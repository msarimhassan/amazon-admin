import { AuthContext } from '../context';
import { useContext } from 'react';
import useUser from './useUser';
const useAuth = () => {
    const { token, setToken } = useContext(AuthContext);
    const { setUser, setUserData, removeUser } = useUser();
   

    const Login = (token, user) => {
        setToken(token);
        setUser(user);
        window.localStorage.setItem('token', token);
    };
    const Logout = () => {
        setToken(null);
        window.localStorage.removeItem('token');
        removeUser();
    };

    const retreiveData = () => {
        console.log('called');
        const token = window.localStorage.getItem('token');
        console.log('tokem', token);
        if (token) {
            const user = JSON.parse(window.localStorage.getItem('userData'));
            setToken(token);
            setUserData(user);
        }
    };

    return { token, Login, Logout, retreiveData };
};

export default useAuth;

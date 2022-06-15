import {AuthContext} from "../context";
import {useContext} from "react";


 const useAuthContext = () => {
    const {token,setToken}=useContext(AuthContext);

    

}

export default useAuthContext;
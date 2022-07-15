import { Login } from "../auth"
import PageNotFound from "../components/PageNotFound";



const AuthRoutes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/*',
        element: <PageNotFound />,
    },
];

export default AuthRoutes;
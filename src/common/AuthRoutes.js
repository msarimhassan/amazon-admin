import { Login,Code } from "../auth"
import PageNotFound from "../components/PageNotFound";




const AuthRoutes = [
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/get-code',
        element:<Code/>
    },
    {
        path: '/*',
        element: <PageNotFound />,
    },
];

export default AuthRoutes;
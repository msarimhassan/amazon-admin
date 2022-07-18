import { Login,Code,Verify,NewPassword } from "../auth"
import PageNotFound from "../components/PageNotFound";
import Routes from "./Routes";





const AuthRoutes = [
    {
        path:Routes.Login,
        element: <Login />,
    },
    {
        path: Routes.getCode,
        element:<Code/>
    },
    {
        path: Routes.NotFound,
        element: <PageNotFound />,
    },
    {
        path: Routes.verifyUser,
        element:<Verify/>
    }, {
        path: Routes.newPassword,
        element:<NewPassword/>
    }
];

export default AuthRoutes;
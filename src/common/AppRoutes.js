import CategoryPage from '../pages/Category';
import HomePage from '../pages/Home';
import ProductPage from '../pages/Product';
import CategoryForm from '../pages/Category/CategoryForm';
import ProductForm from '../pages/Product/ProductForm';
import OrderPage from '../pages/Orders';
import SettingsPage from '../pages/Settings'; 
import ShopPage from '../pages/Shop';
import ShopForm from '../pages/Shop/ShopForm';
import ProfilePage from '../pages/Profile';
import ShopDashboard from '../pages/Shop/Dashboard';
import ShopProfile from '../pages/Shop/Profile';
import RequestTable from '.././pages/Requests/';
import Chat from '../pages/Shop/Chats';
import PageNotFound from '../components/PageNotFound';
import Notification from '../pages/Notifications';
import Routes from './Routes';
const AppRoutes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/productpage',
        element: <ProductPage />,
    },
    {
        path: '/categorypage',
        element: <CategoryPage />,
    },
    {
        path: '/categorypage/addcategory/:mode',
        element: <CategoryForm />,
    },
    {
        path: Routes.manageProduct,
        element: <ProductForm />,
    },
    {
        path: '/order',
        element: <OrderPage />,
    },
    {
        path: '/settings',
        element: <SettingsPage />,
    },
    {
        path: '/shops',
        element: <ShopPage />,
    },{
        path:'/shoppage/addshop/:mode',
        element:<ShopForm />
    },{
        path:'/profile',
        element:<ProfilePage />
    },
    {
        path:'/shop/dashboard',
        element:<ShopDashboard />
    },
    {
       path:'/shop/profile',
       element:<ShopProfile/>
    },{
        path:'/requests',
        element:<RequestTable/>
    }, {
        path: '/shop/chats',
        element:<Chat/>
    },
    {
        path: Routes.notification,
        element:<Notification/>
    },
    {
        path: '/*',
        element:<PageNotFound/>
    }
];

export default AppRoutes;

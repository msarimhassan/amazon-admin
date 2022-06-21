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
        path:'/shoprequest',
    }
];

export default AppRoutes;

import ProductForm from '../pages/Product/ProductForm';
import Routes from './Routes';
import OrderPage from '../pages/Orders';
import ProductPage from '../pages/Product';
import ShopDashboard from '../pages/Shop/Dashboard';
import Chat from '../pages/Shop/Chats';
import ShopProfile from '../pages/Shop/Profile';
const ShopRoutes = [
    {
        path:'/productpage/addproduct/:mode',
        element: <ProductForm />,
    },
    {
        path: '/order',
        element: <OrderPage />,
    },
    {
        path: '/productpage',
        element: <ProductPage />,
    },
    {
        path: '/shop/dashboard',
        element: <ShopDashboard />,
    },
    ,
    {
        path: '/shop/chats',
        element: <Chat />,
    },
    {
        path: '/shop/profile',
        element: <ShopProfile />,
    },
];

export default ShopRoutes;
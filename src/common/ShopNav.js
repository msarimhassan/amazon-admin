import { Icons } from '../common';
const { AI, RI, BI,BS } = Icons;

const iconSize = 25;

export const shop = [
    {
        title: 'Dashboard',
        icon: <AI.AiOutlineHome size={iconSize} />,
        link: '/shop/dashboard',
    },
    {
        title: 'Products',
        icon: <RI.RiProductHuntLine size={iconSize} />,
        link: '/productpage',
    },
    {
        title: 'Orders',
        icon: <AI.AiOutlineShoppingCart size={iconSize} />,
        link: '/order',
    },
    ,
    {
        title: 'Profile',
        icon: <BI.BiUser size={iconSize} />,
        link: '/shop/profile',
    },
    {
        title: 'Chats',
        icon: <BS.BsFillChatSquareDotsFill size={iconSize} />,
        link: '/shop/chats',
    },
];

import {Icons} from '../common'

const {AI,RI,BI} = Icons

const iconSize=25;
export const NavData = [
    {
        title: 'Home',
        icon: <AI.AiOutlineHome size={iconSize} />,
        link: '/',
    },
    {
        title: 'Products',
        icon: <RI.RiProductHuntLine size={iconSize} />,
        link: '/productpage',
    },
    {
        title: 'Category',
        icon: <BI.BiCategory size={iconSize} />,
        link: '/categorypage',
    },
    {
        title: 'Orders',
        icon: <AI.AiOutlineShoppingCart size={iconSize} />,
        link: '/order',
    },

    {
        title: 'Shops',
        icon: <AI.AiFillShop size={iconSize} />,
        link: '/shops',
    },

    {
        title: 'Profile',
        icon: <AI.AiOutlineUser size={iconSize} />,
        link: '/profile',
    },
    {
        title: 'Roles',
        icon: <AI.AiOutlineSetting size={iconSize} />,
        link: '/roles',
    },
   
    {
        title: 'Settings',
        icon: <AI.AiOutlineSetting size={iconSize} />,
        link: '/settings',
    },
];

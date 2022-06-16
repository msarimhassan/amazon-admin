
import {Icons} from '../common'

const {AI,RI,BI} = Icons

const iconSize=25;
export const superAdmin = [
    {
        title: 'Dashboard',
        icon: <AI.AiOutlineHome size={iconSize} />,
        link: '/',
    },
    {
        title: 'Category',
        icon: <BI.BiCategory size={iconSize} />,
        link: '/categorypage',
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
        title: 'Settings',
        icon: <AI.AiOutlineSetting size={iconSize} />,
        link: '/settings',
    },
];


import { Icons } from '../common'
import Routes from './Routes';

const {AI,RI,BI} = Icons

const iconSize=25;
export const superAdmin = [
    {
        title: 'Dashboard',
        icon: <AI.AiOutlineHome size={iconSize} />,
        link: '/',
    },
    {
        title: 'category',
        icon: <BI.BiCategory size={iconSize} />,
        link: '/categorypage',
    },

    {
        title: 'Shops',
        icon: <AI.AiFillShop size={iconSize} />,
        link: '/shops',
    },
    {
        title: 'Requests',
        icon: <BI.BiBell size={iconSize} />,
        link: '/requests',
    },
    {
        title: 'Notifications',
        icon: <AI.AiOutlineNotification size={iconSize} />,
        link: Routes.notification,
    },
    {
        title: 'Settings',
        icon: <AI.AiOutlineSetting size={iconSize} />,
        link: '/settings',
    },
];

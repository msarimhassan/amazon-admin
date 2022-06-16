import { Icons } from '../common';
const { AI, RI, BI } = Icons;

const iconSize = 25;

export const shop = [
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
];
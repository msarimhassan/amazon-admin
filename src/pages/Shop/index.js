import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config';
import Loader from '../../assets/animations';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
export default function ShopPage() {
    const [shopList, setShopList] = useState();
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();
    const getShopes = async () => {
        setLoading(true);

        const response = await Network.get(Urls.getShops, (await config()).headers);
        setShopList(response.data.shops);
        setLoading(false);
    };
    useEffect(() => {
        getShopes();
    }, []);

    const handleDelete = async (id) => {
        const arry = shopList.filter((shop) => shop._id !== id);
        setShopList(arry);
        const response = await Network.delete(Urls.deleteShop + id, {}, (await config()).headers);
        if (!response.ok) {
            return toast.error(response.data.error, { position: 'top-right' });
        }
        toast.success(response.data.message, { position: "top-right" });
    };

    const HeaderData = ['name', 'email', 'action'];
    return (
        <Container>
            <Link to='/shoppage/addshop/create'>
                <Button color='primary' className='mt-4'>
                    {t('new-shop')}
                </Button>
            </Link>
            {loading ? (
                <Loader />
            ) : (
                <TableLayout
                    HeaderData={HeaderData}
                    BodyData={shopList}
                    handleDelete={handleDelete}
                />
            )}
        </Container>
    );
}

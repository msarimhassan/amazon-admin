import React, { useEffect, useState } from 'react';
import { Container,Button } from 'reactstrap';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import Loader from '../../assets/animations';
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config';


export default function ProductPage() {
    const HeaderData = ['name', 'category', 'images', 'action'];
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
     const [page, setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(1);
    let navigate = useNavigate();
    const { t } = useTranslation();
    useEffect(() => {
        getProducts();
    }, []);

    const deleteProduct = async (id) => {
        console.log(id);
        const arry = products.filter((product) => product._id !== id);
        setProducts(arry);
        console.log(Urls.deleteProduct + id);
        const response = await Network.delete(Urls.deleteProduct + id, {}, (await config()).headers);
        console.log(response.data);
    };
    const getProducts = async (page) => {
        setLoading(true);
        const response = await Network.get(Urls.getProducts(i18next.language) +`?page=${page}&limit=10`, (await config()).headers);
        setProducts(response.data.products);
        setTotalPages(response.data.totalpages);
        setLoading(false);
    };
    return (
        <Container>
            {/* <Button color='primary' className='mt-4' onClick={()=>navigate('/productpage/addproduct/create')}> */}
            <a href='/productpage/addproduct/create'>{t('newProduct') }</a>

            {loading ? (
                <Loader />
            ) : (
                <>
                    <TableLayout
                        HeaderData={HeaderData}
                        BodyData={products}
                        deleteProduct={deleteProduct}
                    />
                    {page < totalPages && (
                        <Button
                            onClick={() => {
                                getProducts(page + 1);
                                setPage(page + 1);
                            }}
                        >
                            {t('more')}
                        </Button>
                    )}
                </>
            )}
        </Container>
    );
}

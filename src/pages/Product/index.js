import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import Loader from '../../assets/animations'
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config';
import i18next from 'i18next';

import { useNavigate} from 'react-router-dom';
export default function ProductPage() {
    const HeaderData = ['Name', 'Category', 'Images', 'Actions'];
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    let navigate=useNavigate();
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
    const getProducts = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getProducts(i18next.language), (await config()).headers);
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
    };
    return (
        <Container>
            {/* <Button color='primary' className='mt-4' onClick={()=>navigate('/productpage/addproduct/create')}> */}
            <a href='/productpage/addproduct/create'>Add new Product</a>

            {loading ? <Loader/> : (
                <TableLayout
                    HeaderData={HeaderData}
                    BodyData={products}
                    deleteProduct={deleteProduct}
                />
            )}
        </Container>
    );
}

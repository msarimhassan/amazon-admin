import React, { useEffect, useState } from 'react';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config';

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
        const response = await Network.get(Urls.getProducts, (await config()).headers);
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
    };
    return (
        <Container>
            {/* <Button color='primary' className='mt-4' onClick={()=>navigate('/productpage/addproduct/create')}> */}
            <a href='/productpage/addproduct/create'>Add new Product</a>

            {loading ? null : (
                <TableLayout
                    HeaderData={HeaderData}
                    BodyData={products}
                    deleteProduct={deleteProduct}
                />
            )}
        </Container>
    );
}

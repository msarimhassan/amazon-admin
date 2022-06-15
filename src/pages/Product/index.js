import React from 'react';
import { Container } from 'reactstrap';
import ProductTable from '../../components/TableLayout';
import { Button } from 'reactstrap';
import { HeaderData } from '../../common/HeaderData';
import { ProductData } from '../../common/ProductData';
import { Link } from 'react-router-dom';
export default function ProductPage () {
    return (
        <Container>
            <Link to='/productpage/addproduct/create'>
                <Button color='primary' className='mt-4'>
                    Add new Product
                </Button>
            </Link>
            <ProductTable HeaderData={HeaderData} BodyData={ProductData} />
        </Container>
    );
}

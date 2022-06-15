import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import TableLayout from '../../components/TableLayout';
import { CategoryHeader } from '../../common/CategoryHeader';
import { CategoryData } from '../../common/CategoryData';
export default function CategoryPage() {
    return (
        <div>
            <Container>
                <Link to='/categorypage/addcategory/create'>
                    <Button color='primary' className='mt-4'>
                        Add new Category
                    </Button>
                </Link>
            </Container>
            <TableLayout HeaderData={CategoryHeader} BodyData={CategoryData} />
        </div>
    );
}

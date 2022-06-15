import React from 'react'
import { Container,Button } from 'reactstrap'
import TableLayout from '../../components/TableLayout'
import { ShopData } from '../../common/ShopData'
import { Link } from 'react-router-dom'
export default function ShopPage() {
    const HeaderData=['#','Name','Type','Action']
  return (
      <Container>
          <Link to='/shoppage/addshop/create'>
              <Button color='primary' className='mt-4'>
                  Add New Shop
              </Button>
          </Link>
          <TableLayout HeaderData={HeaderData} BodyData={ShopData} />
      </Container>
  );
}

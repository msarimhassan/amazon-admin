// import React from 'react'
// import { Container,Button } from 'reactstrap'
// import TableLayout from '../../components/TableLayout'
// import { ShopData } from '../../common/ShopData'
// import { Link } from 'react-router-dom'
// export default function ShopPage() {
//     const HeaderData=['#','Name','Type','Action']
//   return (
//       <Container>
//           <Link to='/shoppage/addshop/create'>
//               <Button color='primary' className='mt-4'>
//                   Add New Shop
//               </Button>
//           </Link>
//           <TableLayout HeaderData={HeaderData} BodyData={ShopData} />
//       </Container>
//   );
// }

import React, { useEffect, useState } from 'react';
import { Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import TableLayout from './Table/TableLayout';
import { Network, Urls, config } from '../../config';
import Loader from '../../assets/animations';

export default function ShopPage() {
    const [shopList, setShopList] = useState();
    const [loading, setLoading] = useState(true);
    const getShopes = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getShops, (await config()).headers);
        setShopList(response.data.shops);
        setLoading(false);
    };
    useEffect(() => {
        getShopes();
    }, []);

    const HeaderData = ['Name', 'Email', 'Actions'];
    return (
        <Container>
            <Link to='/shoppage/addshop/create'>
                <Button color='primary' className='mt-4'>
                    Add New Shop
                </Button>
            </Link>
            {loading ? <Loader/> : <TableLayout HeaderData={HeaderData} BodyData={shopList} />}
        </Container>
    );
}

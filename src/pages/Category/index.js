import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import { Button } from 'reactstrap';
import TableLayout  from './Table/TableLayout';
import {Urls,Network,config} from '../../config';
import Loader from '../../assets/animations';

export default function CategoryPage() {
      const HeaderData = ['Name','Image','Actions'];
      const[categories,setCategories] = useState([]); 
      const[loading,setLoading] = useState(true);

      useEffect(()=>{
           getCatogeries();
      },[])

      const getCatogeries=async()=>{
        setLoading(true);
        const response=await Network.get(Urls.getCategories,(await config()).headers);
        setCategories(response.data.categories);
        setLoading(false);
      }
    return (
        <div>
            <Container>
                <Link to='/categorypage/addcategory/create'>
                    <Button color='primary' className='mt-4'>
                        Add new Category
                    </Button>
                </Link>
            </Container>
           {loading?<Loader/>:<TableLayout HeaderData={HeaderData} BodyData={categories}/>}
        </div>
    );
}
// BodyData={CategoryData}
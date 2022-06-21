import React,{useEffect,useState} from 'react'
import{Form,Button,Row,Col,Input,Label} from 'reactstrap'
import { Network,config,Urls } from '../../../config';
import { useFormik } from 'formik';
import Loader from '../../../assets/animations';
const initialValues = {
    name: '',
    email: '',
    password:'',
};





export default function ProfileForm() {
     
    const [loading,setLoading]=useState(false);
    // useEffect(()=>{
    //      GetShopProfile();
    // },[])

    // const GetShopProfile = async() => {
    //     setLoading(true);
    //   const response=await Network.get(Urls.getsingleShop,(await config()).headers);
    //    values.email=response.data.shop.email;

    //    setLoading(false);
    // };

   const onSubmit=async(data)=>{
       console.log(data);

       const response=await Network.post(Urls.updateShop,data,(await config()).headers);
       console.log(response.data);
   }


 const { values, handleChange, handleSubmit, errors } = useFormik({
     initialValues,
     onSubmit,
 });
  return (
      <>
          {loading ? (
              <Loader />
          ) : (
              <Form>
                  <h1>Manage Profile</h1>
                  <Row>
                      <Col md={6} sm={12}>
                          <Label for='name'>Name</Label>
                          <Input
                              name='name'
                              type='text'
                              value={values.name}
                              onChange={handleChange}
                          />
                      </Col>
                      <Col md={6} sm={12}>
                          <Label for='email'>Email</Label>
                          <Input
                              name='email'
                              type='email'
                              value={values.email}
                              onChange={handleChange}
                          />
                      </Col>
                  </Row>
                  <Row className='my-2'>
                      <Col md={6} sm={12}>
                          <Label for='Password'>Password</Label>
                          <Input
                              name='password'
                              type='password'
                              value={values.password}
                              onChange={handleChange}
                          />
                      </Col>
                  </Row>
                  <Button color='primary' onClick={handleSubmit}>
                      Update
                  </Button>
              </Form>
          )}
      </>
  );
}

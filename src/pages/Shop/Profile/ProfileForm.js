import React,{useEffect,useState} from 'react'
import{Form,Button,Row,Col,Input,Label} from 'reactstrap'
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Network,config,Urls } from '../../../config';
import Loader from '../../../assets/animations';
import { toast } from 'react-toastify';


const initialValues = {
    name: '',
    email: '',
};

export default function ProfileForm() {
    const {t} = useTranslation();
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
         GetShopProfile();
    },[])

    const GetShopProfile = async() => {
        setLoading(true);
      const response=await Network.get(Urls.getsingleShop,(await config()).headers);
       values.email=response.data.shop.email;
       values.name=response.data.shop.name;

       setLoading(false);
    };

   const onSubmit=async(data)=>{
       console.log(data);

       const response=await Network.post(Urls.updateShop,data,(await config()).headers);
       if (!response.ok)
       {
           return toast.error(response.data.error,{position:"top-right"})
       }
       toast.success(response.data.message, { position: "top-right" });
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
                      <h1>{t('manage-profile') }</h1>
                  <Row>
                      <Col md={6} sm={12}>
                              <Label for='name'>{t('name')}</Label>
                          <Input
                              name='name'
                              type='text'
                              value={values.name}
                              onChange={handleChange}
                          />
                      </Col>
                      <Col md={6} sm={12}>
                              <Label for='email'>{t('email') }</Label>
                          <Input
                              name='email'
                              type='email'
                              value={values.email}
                              onChange={handleChange}
                          />
                      </Col>
                  </Row>
                  {/* <Row className='my-2'>
                      <Col md={6} sm={12}>
                          <Label for='Password'>Password</Label>
                          <Input
                              name='password'
                              type='password'
                              value={values.password}
                              onChange={handleChange}
                          />
                      </Col>
                  </Row> */}
                  <Button color='primary' onClick={handleSubmit} className='my-2'>
                      {t('update')}
                  </Button>
              </Form>
          )}
      </>
  );
}

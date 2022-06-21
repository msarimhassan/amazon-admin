import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Form, Label, Input, Button, FormText } from 'reactstrap';
import { useFormik } from 'formik';
import Select from 'react-select';
import { Network, Urls, multipartConfig, config } from '../../config';
import { SuccessMessage } from '../../components/Notification';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Routes from '../../common/Routes';
import Loader from '../../assets/animations';

const initialValues = {
    name: '',
    quantity: '',
    sellingPrice: '',
    category: '',
    retailPrice: '',
    description:''
};

export default function ProductForm() {
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categoryId, setCategoryId] = useState();
    const [File, setFile] = useState();
    const { mode } = useParams();
    let location = useLocation();
    let navigate=useNavigate();
    console.log({ mode });
    useEffect(() => {
        if (mode == 'edit') {
            getValues();
        }
        getCatogeries();
    }, []);

    const getValues = async () => {
        setLoading(true)
        console.log('Getvalues'+location.state.id);
                const response = await Network.get(
            Urls.getsingleProduct + location.state.id,
            (
                await config()
            ).headers
        );
        console.log(response.data,'productdata');
        values.name = response.data.product.name;
        values.quantity = response.data.product.quantity;
        values.category = response.data.product.category;
        values.sellingPrice = response.data.product.sellingPrice;
        values.retailPrice = response.data.product.retailPrice;
        values.description=response.data.product.description;
        setCategoryId({value:response.data.product.category._id,label:response.data.product.category.name});
        setLoading(false);
    };
    const getCatogeries = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getCategories, (await config()).headers);
        console.log(response.data.categories);
        const newarray = response.data.categories.map((element) => {
            return {
                label: element.name,
                value: element._id,
            };
        });
        setCategoryList(newarray);
        setLoading(false);
        
    };

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('quantity', data.quantity);
        formData.append('sellingPrice', data.sellingPrice);
         formData.append('category', categoryId.value);
        formData.append('retailPrice', data.retailPrice);
        formData.append('image', File);
        formData.append('description', data.description);
         if(mode=='edit'){
            const response=await Network.put(Urls.updateProduct+location.state.id,formData,(await multipartConfig()).headers);
            console.log(response.data,'updated');
             navigate(Routes.productpage);
            return;
        }
      
        const response = await Network.post(
            Urls.createProduct,
            formData,
            (
                await multipartConfig()
            ).headers
        );
        console.log(response.data);
         SuccessMessage(response.data.message);
          navigate(Routes.productpage);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });

    const handleImage = (e) => {
        setFile(e.target.files[0]);
    };
    return (
        <>
            {loading ? (
               <Loader/>
            ) : (
                <Form>
                    <ToastContainer />
                    <h1>Add New Product</h1>

                    <Label for='Name'>Name</Label>
                    <Input
                        type='text'
                        name='name'
                        placeholder='Product Name'
                        value={values.name}
                        onChange={handleChange}
                    />

                    <Label for='Quantity'>Quantity</Label>
                    <Input
                        type='text'
                        name='quantity'
                        placeholder='Product Quantity'
                        value={values.quantity}
                        onChange={handleChange}
                    />

                    <Label for='Category'>Category</Label>
                    <Select
                        onChange={setCategoryId}
                        options={categoryList}
                        isDisabled={loading}
                        value={
                            loading
                                ? categoryList.find((element) => element.value == categoryId.value)
                                : categoryId
                        }
                    />

                    <Label for='exampleFile'>Upload Image</Label>
                    <Input type='file' name='file' onChange={handleImage} />
                    <FormText color='danger'>
                        (Required image resolution 400x400, image size 0.2mb)
                    </FormText>
                    <br />
                    <Label for='SellingPrice'>Selling Price</Label>
                    <Input
                        type='text'
                        name='sellingPrice'
                        placeholder='Selling Price'
                        value={values.sellingPrice}
                        onChange={handleChange}
                    />
                    <Label for='retailPrice'>Retail Price</Label>
                    <Input
                        type='text'
                        placeholder='Retail Price'
                        name='retailPrice'
                        value={values.retailPrice}
                        onChange={handleChange}
                    />

                    <Label for='Description(English)'>Description(English)</Label>
                    <Input
                        type='textarea'
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                    />

                    <Label for='Description(Spanish)'>Description(Spanish)</Label>
                    <Input type='textarea' name='text' id='exampleText' />
                    <br />
                    <Button color='primary' onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form>
            )}
        </>
    );
}

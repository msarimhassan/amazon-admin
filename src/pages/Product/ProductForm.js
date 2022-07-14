import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import {
    Form,
    Label,
    Input,
    Button,
    FormText,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { useFormik } from 'formik';
import Select from 'react-select';
import { Network, Urls, multipartConfig, config } from '../../config';
import { toast } from 'react-toastify';
import Routes from '../../common/Routes';
import Loader from '../../assets/animations';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import LoadingButton from '../../components/LoadingButton';
const initialValues = {
    name: '',
    quantity: '',
    sellingPrice: '',
    category: '',
    retailPrice: '',
    brandName: '',
    features: '',
    description: '',
};

export default function ProductForm() {
    const [categoryList, setCategoryList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingbtn, setLoadingbtn] = useState(false);
    const [categoryId, setCategoryId] = useState();
    const [File, setFile] = useState();
    const { mode } = useParams();
    let location = useLocation();
    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();
    const handleToggle = ({}) => {
        console.log('Toggle');
        setIsOpen(!isOpen);
    };

    console.log({ mode });
    useEffect(() => {
        if (mode == 'edit') {
            getValues();
        }
        getCatogeries();
    }, []);

    const getValues = async () => {
        setLoading(true);
        console.log('Getvalues' + location.state.id);
        const response = await Network.get(
            Urls.getsingleProduct(i18next.language) + location.state.id,
            (
                await config()
            ).headers
        );
        console.log(response.data, 'productdata');
        values.name = response.data.product.name;
        values.quantity = response.data.product.quantity;
        values.category = response.data.product.category;
        values.sellingPrice = response.data.product.sellingPrice;
        values.retailPrice = response.data.product.retailPrice;
        values.description = response.data.product.description;
        values.brandName = response.data.product.brandName;
        values.features = response.data.product.features;
        setCategoryId({
            value: response.data.product.category._id,
            label: response.data.product.category.name,
        });
        setLoading(false);
    };
    const getCatogeries = async () => {
        setLoading(true);
        const response = await Network.get(
            Urls.getCategories(i18next.language),
            (
                await config()
            ).headers
        );
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
        setLoadingbtn(true);
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('quantity', data.quantity);
        formData.append('sellingPrice', data.sellingPrice);
        formData.append('category', categoryId.value);
        formData.append('retailPrice', data.retailPrice);
        formData.append('brandName', data.brandName);
        formData.append('features', data.features);
        formData.append('image', File);
        formData.append('description', data.description);
        if (mode == 'edit') {
            const response = await Network.put(
                Urls.updateProduct(i18next.language) + location.state.id,
                formData,
                (
                    await multipartConfig()
                ).headers
            );
            if (!response.ok) {
                toast.error(response.data.error.message, {
                    position: 'top-right',
                });
                return 
            }
             toast.success(response.data.message, {
                 position: 'top-right',
             });
            navigate(Routes.productpage);
            return;
        }

        const response = await Network.post(
            Urls.createProduct(i18next.language),
            formData,
            (
                await multipartConfig()
            ).headers
        );
        if (!response.ok) {
            toast.error(response.data.error.message, {
                position: 'top-right',
            });
            return; 
        }
         toast.success(response.data.message, {
             position: 'top-right',
         });
        setLoadingbtn(false);
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
                <Loader />
            ) : (
                <Form>
                    <h1>{t('newProduct')}</h1>

                    <Label for='Name' className='mt-1'>
                        {t('name')}
                    </Label>
                    <Input
                        className='mt-1'
                        type='text'
                        name='name'
                        placeholder='Product Name'
                        value={values.name}
                        onChange={handleChange}
                    />

                    <Label for='Quantity' className='mt-3'>
                        {t('quantity')}
                    </Label>
                    <Input
                        className='mt-1'
                        type='text'
                        name='quantity'
                        placeholder='Product Quantity'
                        value={values.quantity}
                        onChange={handleChange}
                    />

                    <Label for='Category' className='mt-3'>
                        {t('category')}
                    </Label>
                    <Select
                        className='mt-1'
                        onChange={setCategoryId}
                        options={categoryList}
                        isDisabled={loading}
                        value={
                            loading
                                ? categoryList.find((element) => element.value == categoryId.value)
                                : categoryId
                        }
                    />

                    <Label for='exampleFile' className='mt-3'>
                        {t('upload-image')}
                    </Label>
                    <Input type='file' name='file' onChange={handleImage} className='mt-1' />
                    <FormText color='danger' className='mt-1'>
                        (Required image resolution 400x400, image size 0.2mb)
                    </FormText>
                    <br />
                    <Label for='SellingPrice' className='mt-3'>
                        {t('selling-price')}
                    </Label>
                    <Input
                        className='mt-1'
                        type='text'
                        name='sellingPrice'
                        placeholder='Selling Price'
                        value={values.sellingPrice}
                        onChange={handleChange}
                    />
                    <Label for='retailPrice' className='mt-3'>
                        {t('retail-price')}
                    </Label>
                    <Input
                        className='mt-1'
                        type='text'
                        placeholder='Retail Price'
                        name='retailPrice'
                        value={values.retailPrice}
                        onChange={handleChange}
                    />
                    {/* Accordian */}
                    <div>
                        <Accordion
                            open={isOpen ? '1' : null}
                            toggle={function noRefCheck() {}}
                            className='mt-3'
                        >
                            <AccordionItem>
                                <AccordionHeader targetId='1' onClick={(e) => handleToggle(e)}>
                                    {t('additional-info')}
                                </AccordionHeader>
                                <AccordionBody accordionId='1'>
                                    <Label for='brandName'>{t('brand-name')}</Label>
                                    <Input
                                        name='brandName'
                                        value={values.brandName}
                                        onChange={handleChange}
                                    />
                                    <Label for='features'>{t('features')}</Label>
                                    <Input
                                        name='features'
                                        value={values.features}
                                        onChange={handleChange}
                                    />
                                </AccordionBody>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <Label for='Description' className='mt-3'>
                        {t('description')}
                    </Label>
                    <Input
                        className='mt-1'
                        type='textarea'
                        name='description'
                        value={values.description}
                        onChange={handleChange}
                    />
                    <br />
                    <div onClick={handleSubmit}>
                        <LoadingButton loading={loadingbtn} text={t('submit')} type='submit' />
                    </div>
                </Form>
            )}
        </>
    );
}

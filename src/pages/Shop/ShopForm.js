import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Label, Input } from 'reactstrap';
import { Urls, config, Network } from '../../config';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Routes from '../../common/Routes';
import { useLocation, useNavigate,useParams } from 'react-router-dom';
import LoadingButton from '../../components/LoadingButton';
const initialValues = {
    name: '',
    email: '',
    password: '',
};

export default function ShopForm() {
    const [roles, setRoles] = useState();
    const [loading, setLoading] = useState(true);
    const [loadingbtn, setLoadingBtn] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const formMode = useParams();
    const location = useLocation();
    const [mode, setMode] = useState([]);
    const onSubmit = async (values) => {
        setLoadingBtn(true)
        const obj = { ...values, role: mode.value };
        const response = await Network.post(Urls.createShop, obj, (await config()).headers);
        setLoadingBtn(false);
        if (!response.ok)
        {
            return toast.error(response.data.error,{position:"top-right"});
        }
        toast.success(response.data.message, { position: "top-right" });
        navigate(Routes.shop);
    };
    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues,
        onSubmit,
    });
    useEffect(() => {
        getRoles();
    }, []);

    useEffect(() => {
        if (formMode.mode === 'edit')
        {
           
       }
    }, [])
    
    // const GetShop =async() => {
    //     const response=Network.get()
    // }

    const getRoles = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getRoles, (await config()).headers);
        setLoading(false);

        const newarray = response.data.roles.map((element) => {
            return {
                label: element.name,
                value: element._id,
            };
        });
        setRoles(newarray);
    };

    return (
        <Form>
            <Row>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='ShopName'>{t('shop-name') }</Label>
                    <Input
                        type='text'
                        placeholder='Shop Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                    <Label for='ShopName'>{t('email') }</Label>
                    <Input
                        type='email'
                        placeholder='Enter Email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                </Col>
            </Row>
            <Row className='my-4'>
                <Col md={5} sm={12} className='mx-2'>
                    <Label for='ShopName'>{t('password')}</Label>
                    <Input
                        type='password'
                        placeholder='Enter Password'
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                    />
                </Col>
                <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                    <Label for='Role'>{t('role') }</Label>
                    <Select
                        onChange={setMode}
                       isDisabled={loading}
                        options={roles}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='mx-2 mt-4'>
                    <div onClick={handleSubmit}>
                        <LoadingButton text={t('create')} type='submit' loading={loadingbtn}
                        />
                    </div>
                </Col>
            </Row>
        </Form>
    );
}

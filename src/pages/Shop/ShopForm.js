import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Label, Input } from 'reactstrap';
import { Urls, config, Network } from '../../config';
import Select from 'react-select';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import Routes from '../../common/Routes';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoadingButton from '../../components/LoadingButton';
import Loader from '../../assets/animations';
const initialValues = {
    name: '',
    email: '',
    password: '',
    latitude: '',
    longitude:'',
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
        setLoadingBtn(true);
        const obj = { ...values, role: mode.value };
        if (formMode.mode === 'edit')
        {
             const obj2 = { ...values, role: mode.value,id:location.state.id };
            
            const response = await Network.put(Urls.adminUpdateShop, obj2, (await config()).headers);
              if (!response.ok) {
                  return toast.error(response.data.error, { position: 'top-right' });
              }
              toast.success(response.data.message, { position: 'top-right' });
            navigate(Routes.shop);
            return
            }
        const response = await Network.post(Urls.createShop, obj, (await config()).headers);
        setLoadingBtn(false);
        if (!response.ok) {
            return toast.error(response.data.error, { position: 'top-right' });
        }
        toast.success(response.data.message, { position: 'top-right' });
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
        if (formMode.mode === 'edit') {
            GetShop();
        }
    }, []);

    const GetShop = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getShop + location.state.id, (await config()).headers);
        values.name = response.data.shop.name
        values.email=response.data.shop.email
        setLoading(false);
    }

    const getRoles = async () => {
        setLoading(true);
        const response = await Network.get(Urls.getRoles, (await config()).headers);
        const newarray = response.data.roles.map((element) => {
            return {
                label: element.name,
                value: element._id,
            };
        });
        const obj = newarray.find((element) => element.label === 'Shop');
        setMode(obj);
        setRoles(newarray);
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <Form>
                    <Row>
                        <Col md={5} sm={12} className='mx-2'>
                            <Label for='ShopName'>{t('shop-name')}</Label>
                            <Input
                                type='text'
                                placeholder='Shop Name'
                                name='name'
                                value={values.name}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                            <Label for='ShopName'>{t('email')}</Label>
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
                            <Label for='Role'>{t('role')}</Label>
                            <Select
                                isDisabled={true}
                                options={roles}
                                value={roles?.find((element) => element.label == 'Shop')}
                            />
                        </Col>
                    </Row>
                    <Row className='my-4'>
                        <Col md={5} sm={12} className='mx-2'>
                            <Label for='longitude'>{t('longitude')}</Label>
                            <Input
                                type='text'
                                placeholder='Enter longitude'
                                name='longitude'
                                value={values.longitude}
                                onChange={handleChange}
                            />
                        </Col>
                        <Col md={5} sm={12} className='mx-2 mt-lg-0 mt-md-0 mt-sm-4'>
                            <Label for='latitude'>{t('latitude')}</Label>
                            <Input
                                type='text'
                                placeholder='Enter latitude'
                                name='latitude'
                                value={values.latitude}
                                onChange={handleChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col className='mx-2 mt-4'>
                            <div onClick={handleSubmit}>
                                <LoadingButton
                                    text={t('create')}
                                    type='submit'
                                    loading={loadingbtn}
                                />
                            </div>
                        </Col>
                    </Row>
                </Form>
            )}
        </>
    );
}

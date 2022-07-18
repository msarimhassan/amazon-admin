import React,{useState} from 'react'
import { Label, Input } from 'reactstrap';
import { useFormik } from 'formik';
import { useLocation,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import LoadingButton from '../components/LoadingButton';
import { ForgetPassSchema } from '../validations';
import {Network,Urls,config} from '../config';
import Routes from '../common/Routes';

const initialValues = {
    password: '',
    changepassword:'',
};


export default function NewPassword() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = async (values) => {
        setLoading(true);
        const obj = {
            email: location.state.email,
            password:values.password
        }
        const response = await Network.put(Urls.changePassword, obj, (await config()).headers);
        if (response.status == '404')
        {
            setLoading(false);
            return toast.error(response.data.error, { position: "top-right" });
        }
        toast.success(response.data.message, { position: "top-right" });
        navigate(Routes.Login);
        
    }
    const {values,handleChange,handleSubmit,errors}=useFormik({initialValues,onSubmit,validationSchema:ForgetPassSchema})
  return (
      <div
          className='d-flex flex-column justify-content-center align-items-center'
          style={{ height: '100vh' }}
      >
          {location&&location.state.email}
          <div className='border p-5'>
              <h1>Change Password</h1>
              <p>Use the form below to change the password for your Amazon account</p>
              <Label>New Password</Label>
              <Input
                  name='password'
                  value={values.password}
                  onChange={handleChange}
                  type='password'
              />
              <span className='text-danger'>{errors && errors['password']}</span>
              <br/>
              <Label className='mt-3'>Confirm Password</Label>
              <Input
                  name='changepassword'
                  value={values.changepassword}
                  onChange={handleChange}
                  type='password'
              />
              <span className='text-danger'>{errors && errors['changepassword']}</span>
              <div className='mt-4 d-flex justify-content-center' onClick={handleSubmit}>
                  <LoadingButton loading={loading} text='change Password' type='submit' />
              </div>
          </div>
      </div>
  );
}

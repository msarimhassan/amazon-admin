import React, { useState } from 'react'
import { Input,Label } from 'reactstrap'
import LoadingButton from '../components/LoadingButton'
import { useFormik } from 'formik'
import { useLocation,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Routes from '../common/Routes'

const initialValues = {
    code:''
}
export default function Verify() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = (values) => {
        setLoading(true);
        if (values.code != location.state.code)
        { 
            setLoading(false);
            return toast.error('Code Doesnt match', { position: "top-right" });
        }
        setLoading(false);

        navigate(Routes.newPassword,{state:{email:location.state.email}});
        
  }

    const {values,handleChange,handleSubmit } = useFormik({initialValues,onSubmit});
  return (
      <div
          className='d-flex align-items-center justify-content-center flex-column'
          style={{ height: '100vh' }}
      >
          {location && location.state.code}
          <div className='border p-5'>
              <h1>Verify Email Address</h1>
              <p>To verify your email. we've send a One Time Password (OTP) to testing</p>
              <Label>Enter OTP</Label>
              <Input name='code' placeholder='OTP' type='text' onChange={handleChange} value={values.code} />
              <div onClick={handleSubmit} className='mt-4 d-flex justify-content-center'>
                  <LoadingButton text='verify' loading={loading} />
              </div>
          </div>
      </div>
  );
}

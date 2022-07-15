import React, { useState } from 'react'
import { Input,Label } from 'reactstrap'
import LoadingButton from '../components/LoadingButton'
import { useFormik } from 'formik'
import { useLocation,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const initialValues = {
    code:''
}
export default function Verify() {
    const [loading, setLoading] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = (values) => {
        if (values.code == location.state.code)
        {
            return toast.error('Code Doesnt match', { position: "top-right" });
        }
        
  }

    const {values,handleChange,handleSubmit } = useFormik({initialValues,onSubmit});
  return (
      <div className='d-flex align-items-center justify-content-center' style={{height:'100vh'}}>
          <div>
              <h1>Shop Verification</h1>
              <Label>Verfication code</Label>
              <Input name='code' type='text' onChange={handleChange} value={values.code} />
              <div onClick={handleSubmit}>
                  <LoadingButton text='verify' loading={loading} />
              </div>
          </div>
    </div>
  )
}

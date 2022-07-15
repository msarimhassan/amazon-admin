import React,{useState} from 'react'
import { Input, Label } from 'reactstrap'
import LoadingButton from '../components/LoadingButton'
import { Network, Urls, config } from '../config';
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

const initialValues = {
    email:''
}
export default function Code() {
   
    const [loading, setLoading] = useState('');
    const onSubmit = async (values) => {
        console.log(values);
        setLoading(true);
        const response = await Network.get(Urls.getCode, (await config()).headers,values);
        if (!response.ok) {
            toast.error(response.data.error, { position: "top-right" });
        }
        toast.success(response.data.message, { position: "top-right" });
        setLoading(false);
    }
    const {values,handleChange,handleSubmit}=useFormik({initialValues,onSubmit})
  return (
      <div className='d-flex align-items-center justify-content-center' style={{height:'80vh'}}>
          <div className='border p-5'>
              <h1>Forget Password</h1>
              <Label>Email</Label>
              <Input placeholder='Enter your email' value={values.email} name='email' type='email' onChange={handleChange} />
              <div className='mt-4' onClick={handleSubmit}>
                  <LoadingButton text='send code' loading={loading} />
              </div>
          </div>
    </div>
  )
}

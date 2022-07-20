import React,{useState} from 'react'
import { Input, Label } from 'reactstrap';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import LoadingButton from '../../components/LoadingButton';
import { Network,Urls,config} from '../../config';

const initialValues = {
    message:""
}

export default function Notification() {
    const [loading, setLoading] = useState(false);
    const onSubmit = async(obj) => {
        setLoading(true);
        const response = await Network.post(Urls.createNotification, obj, (await config()).headers);
        if (!response.ok)
        {
            setLoading(false);
            toast.error(response.data.error, { position: "top-right" });
            return
        }
        toast.success('Notification send', { position: 'top-right' });
        values.message=''
        setLoading(false);
    }
    const {handleChange,handleSubmit,values}=useFormik({initialValues,onSubmit})
  return (
      <div>
          <h1>Create a notification</h1>
          <Input value={values.message} name='message' onChange={handleChange} placeholder='Your message here' type='text' />
          <div className='mt-4' onClick={handleSubmit}>
              <LoadingButton text='create' loading={loading} type='submit' />
              </div>

          
      </div>
  )
}

import * as Yup from 'yup';

export const ForgetPassSchema = Yup.object().shape({
    password: Yup.string().required('This field is required'),
    changepassword: Yup.string().when('password', {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf([Yup.ref('password')], 'Password doesnot match'),
    }),
});
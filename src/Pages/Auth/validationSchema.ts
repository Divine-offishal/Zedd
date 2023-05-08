import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(6, 'Password must be at least 6 characters')
});
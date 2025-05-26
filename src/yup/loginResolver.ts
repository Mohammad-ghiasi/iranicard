import * as yup from 'yup';

export const loginSchema = yup.object({
    phone: yup
        .string()
        .required('شماره تلفن الزامی است')
        .matches(/^09\d{9}$/, 'شماره تلفن معتبر نیست'),

    password: yup.string().required('رمز عبور الزامی است').min(6, 'حداقل ۶ کاراکتر'),
});
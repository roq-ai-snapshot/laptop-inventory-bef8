import * as yup from 'yup';

export const laptopValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  price: yup.number().integer().required(),
  quantity: yup.number().integer().required(),
  company_id: yup.string().nullable().required(),
});

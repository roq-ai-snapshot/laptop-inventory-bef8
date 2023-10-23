import * as yup from 'yup';

export const inventoryValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  status: yup.string().required(),
  laptop_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});

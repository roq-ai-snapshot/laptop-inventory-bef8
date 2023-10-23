import * as yup from 'yup';

export const purchaseValidationSchema = yup.object().shape({
  quantity: yup.number().integer().required(),
  total_price: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
  laptop_id: yup.string().nullable().required(),
});

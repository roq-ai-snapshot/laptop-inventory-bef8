import * as yup from 'yup';

export const financeValidationSchema = yup.object().shape({
  total_revenue: yup.number().integer().required(),
  total_expense: yup.number().integer().required(),
  profit: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});

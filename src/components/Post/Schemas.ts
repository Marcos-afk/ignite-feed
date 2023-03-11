import * as yup from 'yup';

export const FormPostSchema = yup.object({
  comment: yup
    .string()
    .required('O comentário precisa ter conteúdo')
    .max(150, 'O comentário não pode ter mais de 150 caracteres'),
});

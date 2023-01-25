import * as yup from "yup";

export const ValidationSchema = yup.object({
    name: yup
    .string()
    .required('El nombre es obligatorio'),
    path: yup
    .string()
    .required('La ruta es requerida'),
    publicPath: yup
    .string()
    .required('La ruta pública es obligatoria'),
    key: yup
    .string()
    .required('la key es requerida'),
    description: yup
    .string()
    .required('La descripción es obligatoria')
  });
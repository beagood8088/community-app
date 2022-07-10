import * as yup from "yup";

export const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required.'),
  lastName: yup
    .string()
    .required('Last Name is required.'),
  mobilePhone: yup
    .string()
    .matches(/^([0-9]*)$/i, 'Input only digit.')
    .required('Mobile Phone is required.')
    .matches(/^((?:[+?0?0?966]+)(?:\s?\d{2})(?:\s?\d{7}))$/i, 'Not Saudi Arabia Phone number'),
  email: yup
    .string()
    .email('Not valid email')
    .required('Email is required'),
  city: yup.object().shape({
    label: yup.string().required("required"),
    value: yup.string().required()
  })
    .nullable()
    .required("City is required"),
  branches: yup
    .string()
    .required('Branches is required.'),
  hospitalityGroups: yup
    .string()
}).required();



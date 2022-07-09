import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup
    .string('Ttiel should be chracter.')
    .required('Title is Required.'),
  topic: yup.object().shape({
    label: yup.string().required("required"),
    value: yup.string().required()
  })
    .nullable()
    .required("Topic is required!!!!!"),
}).required();



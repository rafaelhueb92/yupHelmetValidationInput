const yup = require("yup");

const personSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup
    .number()
    .required()
    .positive()
    .integer()
});


module.exports = personSchema;

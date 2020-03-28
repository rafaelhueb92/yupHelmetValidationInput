const app = require("express").Router();
const personValidation = require("../validations/person.validation");

app.use(async (req, res, next) => {

  const { body } = req;

  const isValid = await personValidation.isValid(body);

  if (!isValid) return res.status(400).send("badRequest");

  return next();
  
});

module.exports = app;

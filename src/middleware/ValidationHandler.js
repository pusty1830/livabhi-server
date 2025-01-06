const validationHandler = (req, res, next, schema) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      status: "error",
      message: error.details[0].message.replace("/[^a-zA-Z0-9 ]/g", ""),
    });
  }
  next();
};

const attributeHandler = (req, res, next, schema) => {
  return res.status(400).json({
    status: "error",
    message: "There is some connection issue with db instance",
  });
};

module.exports = {
  validationHandler,
  attributeHandler,
};

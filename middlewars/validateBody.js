const { HttpError } = require("../helpers");

const validateBody = (schema, message) => {
  const func = (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      error.details[0].type === "any.required"
        ? next(HttpError(400, message))
        : next(HttpError(400, error.message));
    }
    next();
  };

  return func;
};

module.exports = validateBody;

import Joi from "joi";

const UpdateSchema = Joi.object({
  username: Joi.string().required().min(5).max(25).messages({
    "any.required": `"Username is required."`,
    "string.min": `"Username must have 5 characters."`,
    "string.max": `"Username must be less than 25 characters."`,
  }),
  email: Joi.string().email().required().messages({
    "any.required": `"Email is required."`,
    "string.email": `"Email must be valid."`,
  }),
});

export const UpdateValidate = (req, res, next) => {
  const { error } = UpdateSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

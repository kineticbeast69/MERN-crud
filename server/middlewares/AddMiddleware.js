import Joi from "joi";

// Define the Joi schema with custom error messages
const AddSchema = Joi.object({
  username: Joi.string().required().min(5).max(25).messages({
    "string.base": `"username" should be a type of 'text'`,
    "string.min": `"username" should have a minimum length of 5`,
    "string.max": `"username" should have a maximum length of 25`,
    "any.required": `"username" is a required field`,
  }),

  email: Joi.string().required().email().messages({
    "string.email": `"email" must be a valid email address`,
    "any.required": `"email" is a required field`,
  }),

  password: Joi.string().required().min(4).max(8).messages({
    "string.min": `"password" should have a minimum length of {#limit}`,
    "string.max": `"password" should have a maximum length of {#limit}`,
    "any.required": `"password" is a required field`,
  }),
});

// Validation middleware
export const AddValidator = (req, res, next) => {
  const { error } = AddSchema.validate(req.body);
  if (error)
    return res.status(400).json({ messages: error.details[0].message });

  next();
};

import Joi from "joi";

export const FormValidator = Joi.object({
    query: Joi.string()
        .trim()
        .min(1)
        .messages({
        'string.empty': 'Введіть назву фільму'
    }),
});
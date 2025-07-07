import Joi from "joi";

export const FormValidator = Joi.object({
    query: Joi.string().trim().min(1).required().messages({
        'string.empty': 'Введіть назву фільму',
        'required': 'Це поле є обов’язковим',
    }),
});
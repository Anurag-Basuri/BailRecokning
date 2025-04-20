import Joi from "joi";
import { ApiError } from "../utils/errorHandler.js";

const validate = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(", ");
      return next(new ApiError(400, errorMessage));
    }

    next();
  };
};

// Validation schemas
export const userValidation = {
  register: Joi.object({
    name: Joi.string().required().min(3).max(50),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(6),
    role: Joi.string().valid("admin", "lawyer", "judge", "clerk", "user"),
  }),

  login: Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  update: Joi.object({
    name: Joi.string().min(3).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(6),
  }),
};

export const caseValidation = {
  create: Joi.object({
    title: Joi.string().required().min(5).max(100),
    description: Joi.string().required().min(10),
    status: Joi.string().valid(
      "pending",
      "in_progress",
      "completed",
      "cancelled"
    ),
    lawyerId: Joi.string().required(),
    judgeId: Joi.string().required(),
    charges: Joi.array().items(Joi.string()),
    timeline: Joi.array().items(
      Joi.object({
        date: Joi.date().required(),
        description: Joi.string().required(),
        type: Joi.string().valid("hearing", "filing", "order", "other"),
      })
    ),
  }),

  update: Joi.object({
    title: Joi.string().min(5).max(100),
    description: Joi.string().min(10),
    status: Joi.string().valid(
      "pending",
      "in_progress",
      "completed",
      "cancelled"
    ),
    lawyerId: Joi.string(),
    judgeId: Joi.string(),
    charges: Joi.array().items(Joi.string()),
    timeline: Joi.array().items(
      Joi.object({
        date: Joi.date().required(),
        description: Joi.string().required(),
        type: Joi.string().valid("hearing", "filing", "order", "other"),
      })
    ),
  }),
};

export const bailValidation = {
  create: Joi.object({
    caseId: Joi.string().required(),
    amount: Joi.number().required().min(0),
    conditions: Joi.array().items(Joi.string()),
    status: Joi.string().valid("pending", "granted", "rejected", "revoked"),
    documents: Joi.array().items(Joi.string()),
  }),

  update: Joi.object({
    amount: Joi.number().min(0),
    conditions: Joi.array().items(Joi.string()),
    status: Joi.string().valid("pending", "granted", "rejected", "revoked"),
    documents: Joi.array().items(Joi.string()),
  }),
};

export default validate;

const { z } = require("zod");

// Creating an object Schema
const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email must be at least of 3 char" })
    .max(255, { message: "Email must not be more than 255 characters " }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least of 6 char" })
    .max(1024, { message: "Email must not be more than 1024 characters " }),
});

const SignupSchema = LoginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 char" })
    .max(255, { message: "Name must not be more than 255 characters " }),
  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 number" })
    .max(20, { message: "Phone must not be more than 20 number " }),
});



module.exports = { SignupSchema, LoginSchema };

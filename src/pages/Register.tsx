import {
  RegisterUserI,
  registerUser,
} from "../firebase/actions/auth/registerUser";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../ui/Input";

const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
      invalid_type_error: "Name must be a string",
    })
    .min(5, { message: "Username is too short" })
    .max(14, {
      message: "Username is too long",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string({
      required_error: "Password is required.",
    })
    .min(6, { message: "Password is too short" })
    .max(14, {
      message: "Password is too long",
    }),
});

export type validFieldNames = "username" | "email" | "password";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserI>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form onSubmit={handleSubmit((data) => registerUser(data))}>
            <div className="mb-4">
              <Input
                error={errors.username}
                lable="Username"
                name="username"
                placeholder="Enter your username"
                register={register}
                type="text"
              />
            </div>
            <div className="mb-4">
              <Input
                error={errors.email}
                lable="Email"
                name="email"
                placeholder="Enter your email"
                register={register}
                type="email"
              />
            </div>
            <div className="mb-4">
              <Input
                error={errors.password}
                lable="Password"
                placeholder="Enter your password"
                register={register}
                type="password"
                name="password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;

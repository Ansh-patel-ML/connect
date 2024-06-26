import { FieldError, UseFormRegister } from "react-hook-form";
import { RegisterUserI } from "../firebase/actions/auth/registerUser";
import { validFieldNames } from "../pages/Register";

interface InputI {
  lable: string;
  placeholder: string;
  error: FieldError | undefined;
  type: string;
  name: validFieldNames;
  register: UseFormRegister<RegisterUserI>;
}

const Input: React.FC<InputI> = ({
  lable,
  error,
  type,
  placeholder,
  name,
  register,
}) => {
  return (
    <>
      <label htmlFor={name} className="block text-gray-700">
        {lable}
      </label>
      <input
        {...register(name)}
        placeholder={placeholder}
        type={type}
        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <p className="text-rose-500">{error.message}</p>}
    </>
  );
};

export default Input;

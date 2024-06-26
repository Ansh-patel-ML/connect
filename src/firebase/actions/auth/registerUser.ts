import { UserCredential, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config";
import toast from "react-hot-toast";

export interface RegisterUserI {
  username: string;
  email: string;
  password: string;
}

export const registerUser = async ({
  username,
  email,
  password,
}: RegisterUserI) => {
  const registerUserPromise: Promise<UserCredential> =
    createUserWithEmailAndPassword(auth, email, password);
  registerUserPromise
    .then((data) => {
      console.log("data", data);
    })
    .catch((err) => {
      console.log("error", err);
    });
  toast.promise(registerUserPromise, {
    loading: "Registering User to Database",
    success: () => `Successfully saved ${username}`,
    error: (error) => `${error.message}`,
  });
};

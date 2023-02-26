import * as Yup from "yup"

export const RegisterSchema = Yup.object(
    {
        email: Yup.string().email().required("Please enter your email").matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$/i, 'email must be a valid email'),
        password: Yup.string().required("Please enter your password").min(6, "Password must be more than 6 characters"),
    }
)


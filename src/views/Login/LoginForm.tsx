import { useMutation } from "@apollo/client";
import { Form, Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { authenticationMutation } from "../../api/mutations/authenticationMutation";
import { LoginButton } from "../../components/Button";
import { FormRow, FormWrapper } from "../../components/Form";
import { Input } from "../../components/Input/Input";
import { H3 } from "../../components/Typography";

interface LoginFormValues {
    email: string;
    password: string;
}

const initialValues: LoginFormValues = {
    email: "",
    password: "",
}

const validationSchema = object().shape({
    email: string().required("The email address is required"),
    password: string().required("The password is required."),
})

export const LoginForm: React.FC = () => {
    const [login, ] = useMutation(authenticationMutation);

    const onLoginSubmit = async (values: LoginFormValues) => {
        await login({
            variables: {
                email: values.email,
                password: values.password
            }
        });
    }

    return (
        <FormWrapper width="400px" height="250px">
            <H3>Login</H3>
            <Formik initialValues={initialValues} onSubmit={onLoginSubmit} validationSchema={validationSchema}>
                {() => (
                    <Form>
                        <FormRow>
                            <Input name="email" placeholder="Email" />
                            <Input name="password" type="password" placeholder="Password" />
                        </FormRow>
                        <FormRow centered>
                        <LoginButton type="submit" variant="dark">Login</LoginButton>
                        </FormRow>
                    </Form>
                )}
            </Formik>
        </FormWrapper>   
    )
}
import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import React from "react";
import { object, string } from "yup";
import { registerMutation } from "../../api/mutations/registerMutation";
import { RegisterButton } from "../../components/Button";
import { FormRow, FormWrapper, StyledForm } from "../../components/Form";
import { Input } from "../../components/Input/Input";
import { PageLayout } from "../../components/PageLayout";
import { H3 } from "../../components/Typography";

interface RegisterFormValues {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const initialValues: RegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const validationSchema = object().shape({
    firstName: string().required("Please enter your name."),
    lastName: string().required("Please enter your surname."),
    email: string().required("Please enter your email address"),
    password: string()
        .min(5, "Password must be at least 5 characters long.")
        .required("Please enter your password."),
});

export const RegisterView: React.FC = () => {
    const [register] = useMutation(registerMutation);
    const onRegister = async (values: RegisterFormValues) => {
        await register({
            variables: {
                data: {
                    name: `${values.firstName} ${values.lastName}`,
                    email: values.email,
                    isAdmin: false,
                    password: values.password,
                },
            },
        });
    };

    return (
        <PageLayout>
            <FormWrapper width="500px">
                <H3>Sign up for a free account.</H3>
            <Formik
                initialValues={initialValues}
                onSubmit={onRegister}
                validationSchema={validationSchema}
            >
                {() => (
                    <StyledForm>
                        <FormRow>
                            <Input name="firstName" placeholder="first name" />
                            <Input name="lastName" placeholder="last name" />
                        </FormRow>
                        <FormRow>
                            <Input name="email" placeholder="email address" />
                        </FormRow>
                        <FormRow>
                            <Input
                                name="password"
                                type="password"
                                placeholder="passowrd"
                            />
                        </FormRow>
                        <RegisterButton type="submit">Register</RegisterButton>
                    </StyledForm>
                )}
            </Formik>
            </FormWrapper>
        </PageLayout>
    );
};

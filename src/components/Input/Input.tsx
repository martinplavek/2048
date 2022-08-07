import { Field, FieldProps } from "formik";
import React from "react";
import { StyledInput } from ".";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string
  }

export const Input: React.FC<InputProps> = ({name, placeholder, type = "text"}) =>  (
        <Field name={name}>
            {({field}: FieldProps) => (
                <StyledInput {...field} type={type} placeholder={placeholder} />
            )}
        </Field>
    )
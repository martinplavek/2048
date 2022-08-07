import { Form } from "formik";
import styled from "styled-components";

export const FormWrapper = styled.div<{width?: string, height?: string}>`
    padding: 20px 30px 30px;
    width: ${props => props.width || "auto"};
    height: ${props => props.height || "auto"};
    border: 2px solid #776e65;
    border-radius: 4px;
`;

export const StyledForm = styled(Form)`
`;

export const FormRow = styled.div<{centered?: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.centered ? "center" : "auto"};
`;
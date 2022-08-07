import styled from "styled-components";
import { LoginButtonVariant } from "./types";

export const StartGameButton = styled.button`
    background: #8f7a66;
`;

export const ButtonTitle = styled.span`
    color: #f9f6f2;
    font-size: 18px;
    font-weight: 700;
    line-height: 42px;
    border: none;
`;

export const ControlButton = styled.button`
    margin: 0 5px;
    border-radius: 2px;
    width: 80px;
    height: 32px;
    cursor: pointer;
`;

export const LoginButton = styled(ControlButton)<{variant?: LoginButtonVariant}>`
    background: ${props => props.variant === "dark" ? "#8f7a66" : "white"};
    color: ${props => props.variant === "dark" ? "white" : "#8f7a66"};
    border: 1px solid #8f7a66;
`

export const RegisterButton = styled(ControlButton)`
    background: #8f7a66;
    color: white;
    border: none;
`;
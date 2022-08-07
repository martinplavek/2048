import React from "react";
import { CloseDialogButton, DialogContent, StyledDialog } from ".";

interface DialogProps {
    onCloseDialog: () => void;
    children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({onCloseDialog, children}) => {

    return (
        <StyledDialog>
            <DialogContent>
            {children}
            <CloseDialogButton onClick={onCloseDialog}>&#xD7;</CloseDialogButton>
            </DialogContent>
        </StyledDialog>
    )
}
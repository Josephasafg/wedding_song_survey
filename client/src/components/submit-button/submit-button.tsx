import React from "react";
import { Button } from '@material-ui/core';

interface SubmitButtonProps {
    onClick: () => void
}

export const SubmitButton: React.FC<SubmitButtonProps> = (
    {
        onClick
    }) => {


    return (
        <Button onClick={onClick}>
            Submit
        </Button>
    )
}
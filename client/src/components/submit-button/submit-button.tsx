import React from "react";
import { Button } from '@material-ui/core';

interface SubmitButtonProps {
    onClick: () => void
    pickedSongId: number
}

export const SubmitButton: React.FC<SubmitButtonProps> = (
    {
        onClick,
        pickedSongId
    }) => {


    return (
        <Button onClick={onClick} disabled={pickedSongId === -1}>
            שלחו לדיג'יי
        </Button>
    )
}
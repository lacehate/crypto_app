import React from "react";
import classes from "./index.module.scss";

interface IInput {
    placeholder: string;
    type: string;
    onChange: (value: string) => void;
}

function Input({ placeholder, type, onChange }: IInput) {
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };

    return (
        <input
            className={classes.input}
            type={type}
            placeholder={placeholder}
            onChange={(e) => onInputChange(e)}
        />
    );
}

export default Input;

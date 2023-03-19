import classes from "./index.module.scss";

interface IButton {
    text: string;
    onClick: () => void;
    disabled: Boolean;
}

function Button({ text, onClick, disabled }: IButton) {
    return (
        <button
            className={disabled ? classes.disabled : classes.mainBtn}
            onClick={() => onClick()}
        >
            {text}
        </button>
    );
}

export default Button;

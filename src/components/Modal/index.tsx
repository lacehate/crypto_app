import Button from "../../elements/Button";
import classes from "./index.module.scss";

interface IModal {
    onClick: () => void;
}

function Modal({ onClick }: IModal) {
    return (
        <div className={classes.modal_wrapper}>
            <div className={classes.modal}>
                <h1>metamask extention</h1>
                <p>
                    To work with our application, you have to install the&nbsp;
                    <a
                        href="https://metamask.io/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Metamask browser extension
                    </a>
                </p>
                <Button
                    text={"Skip this step"}
                    onClick={() => onClick()}
                    disabled={false}
                />
            </div>
        </div>
    );
}

export default Modal;

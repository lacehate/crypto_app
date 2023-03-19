import { useEthers } from "@usedapp/core";
import Button from "../../elements/Button";
import classes from "./index.module.scss";
import { useHistory } from "react-router-dom";

function Header() {
    const { account, activateBrowserWallet } = useEthers();
    const router = useHistory();

    return (
        <div className={classes.header}>
            <div onClick={() => router.push("/")} className={classes.logo}>
                LOGO
            </div>
            {account ? (
                <div className={classes.wallet}>{account}</div>
            ) : (
                <Button
                    text={"Connect metamask"}
                    onClick={() => activateBrowserWallet()}
                    disabled={false}
                />
            )}
        </div>
    );
}

export default Header;

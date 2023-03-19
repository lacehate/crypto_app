import React from "react";
import classes from "./index.module.scss";
import { useHistory } from "react-router-dom";
import closeIcon from "../../assets/img/close.png";
import { useEthers } from "@usedapp/core";

interface IItem {
    id: Number;
    username: string;
    email: string;
    address: string;
}

interface ITable {
    data: IItem[];
    deleteUser: (arg0: Number) => void;
}

function Table({ data, deleteUser }: ITable) {
    const { account } = useEthers();
    const router = useHistory();

    const onDelete = (
        e: React.MouseEvent<HTMLImageElement, MouseEvent>,
        id: Number
    ) => {
        e.stopPropagation();
        deleteUser(id);
    };

    const onClick = (id: Number, address: string) => {
        if (address !== account) {
            router.push(`/user/${id}`);
        }
    };

    return (
        <div className={classes.table_wrapper}>
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <td style={{ width: 10 }}></td>
                        <th>EMAIL</th>
                        <td style={{ width: 30 }}></td>
                        <th>Wallet</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr
                            key={i}
                            onClick={() => onClick(item.id, item.address)}
                            className={
                                account === item.address
                                    ? classes.active_row
                                    : ""
                            }
                        >
                            <td>
                                <p>{item.username}</p>
                            </td>
                            <td></td>
                            <td>
                                <p>{item.email}</p>
                            </td>
                            <td></td>
                            <td className={classes.action}>
                                <p>{item.address}</p>
                                {account === item.address && (
                                    <img
                                        onClick={(e) => onDelete(e, item.id)}
                                        src={closeIcon}
                                        alt="close"
                                    />
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;

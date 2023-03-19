import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./index.module.scss";
import planetImg from "../../assets/img/planet.png";
import useSWR from "swr";

interface IParams {
    id: string;
}

function User() {
    const params = useParams<IParams>();
    const [user, setUser] = useState({ username: "", email: "", address: "" });
    const fetcher = (res: RequestInfo | URL) =>
        fetch(res).then((res) => res.json());
    const { data, isLoading } = useSWR(
        `https://new-backend.unistory.app/api/data/id/${params.id}`,
        fetcher
    );

    useEffect(() => {
        if (!isLoading) {
            setUser(data);
        }
    }, [data, isLoading]);

    return (
        <div className={classes.details}>
            <h1>Personal data</h1>
            <div className={classes.details__info}>
                <p>Name</p>
                <p>{user.username}</p>
            </div>
            <div className={classes.details__info}>
                <p>Email</p>
                <p>{user.email}</p>
            </div>
            <div className={classes.details__info}>
                <p>wallet</p>
                <p>{user.address}</p>
            </div>
            <img src={planetImg} alt="planetImg" />
        </div>
    );
}

export default User;

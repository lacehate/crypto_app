import { useState } from "react";
import classes from "./index.module.scss";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { useEthers } from "@usedapp/core";
import orbitsImg from "../../assets/img/orbits.png";
import Orbit from "../../components/Orbit";
import useSWR from "swr";

function Home() {
    const fetcher = (res: RequestInfo | URL) =>
        fetch(res).then((res) => res.json());
    const { data } = useSWR(
        "https://new-backend.unistory.app/api/data?page=0&perPage=20",
        fetcher
    );

    const { account } = useEthers();
    const [user, setUser] = useState({ username: "", email: "" });
    const [users, setUsers] = useState([] as any);
    const [isOpen, setIsOpen] = useState(true);

    const deleteUser = (id: Number) => {
        setUsers(users.filter((user: { id: Number }) => user.id !== id));
    };
    const addUser = () => {
        setUsers([{ ...user, address: account }, ...data.items]);
    };

    return (
        <div className={classes.home}>
            {isOpen && <Modal onClick={() => setIsOpen(false)} />}
            <div className={classes.intro}>
                <div className={classes.intro__hero}>
                    <div className={classes.intro__hero__title}>
                        <div className={classes.planet}>
                            <h1>
                                Explore Your own Planet In
                                <span> our New </span>metaverse
                            </h1>
                            <img src={orbitsImg} alt="orbitsImg" />
                            <div className={classes.planet__orbit}>
                                <Orbit />
                            </div>
                            <div className={classes.planet__info}>Q1 2022</div>
                        </div>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>
                </div>

                <div className={classes.intro__stats}>
                    <h1>Roadmap stats</h1>
                    <div className={classes.intro__stats__block}>
                        <p>12, 345</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className={classes.intro__stats__block}>
                        <p>12, 345</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                    <div className={classes.intro__stats__block}>
                        <p>12, 345</p>
                        <p>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>

            <div className={classes.users}>
                <div className={classes.users__form}>
                    <h1 className={classes.users__form__title}>
                        Beta test registration
                    </h1>
                    <p className={classes.users__form__description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                    </p>

                    <p className={classes.users__form__label}>Name</p>
                    {users.length !== 0 ? (
                        <h1 className={classes.users__form__data}>
                            {user.username}
                        </h1>
                    ) : (
                        <Input
                            type="text"
                            placeholder={
                                "We will display your name in participation list"
                            }
                            onChange={(val) =>
                                setUser({ ...user, username: val })
                            }
                        />
                    )}
                    <p className={classes.users__form__label}>Email</p>
                    {users.length ? (
                        <h1 className={classes.users__form__data}>
                            {user.email}
                        </h1>
                    ) : (
                        <Input
                            type="email"
                            placeholder={
                                "We will display your email in participation list "
                            }
                            onChange={(val) => setUser({ ...user, email: val })}
                        />
                    )}

                    <Button
                        disabled={users.length}
                        text={"Get early access"}
                        onClick={() => addUser()}
                    />
                </div>
                {users.length !== 0 && (
                    <div className={classes.users_table}>
                        <h1 className={classes.users__table__title}>
                            Participation listing (enable only for participants)
                        </h1>
                        <Table
                            data={users}
                            deleteUser={(id) => deleteUser(id)}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Home;

import { useState, useEffect } from "react";
import classes from "./index.module.scss";
import Input from "../../elements/Input";
import Button from "../../elements/Button";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { useEthers } from "@usedapp/core";
import orbitsImg from "../../assets/img/orbits.png";
import Orbit from "../../components/Orbit";
import useSWR from "swr";

import { useSelector, useDispatch } from 'react-redux'
import { setUsername, setEmail } from '../../store/user';

function Home() {
    const fetcher = (res: RequestInfo | URL) =>
        fetch(res).then((res) => res.json());
    const { data } = useSWR(
        "https://new-backend.unistory.app/api/data?page=0&perPage=20",
        fetcher
    );

    const user = useSelector((state: any) => state.user);
    const dispatch = useDispatch()
    const { account } = useEthers();
    const [users, setUsers] = useState([] as any);
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);

    const [validation, setValidation] = useState({
        username: true,
        email: true,
    });
    
    const deleteUser = (id: Number) => {
        dispatch(setUsername(""));
        dispatch(setEmail(""));
        setIsSubmited(false);
        setUsers(users.filter((user: { id: Number }) => user.id !== id));
    };

    const addUser = () => {
        if (!account) {
            setIsOpen(true);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const validName = Boolean(user.username);
        const validEmail = Boolean(emailRegex.test(user.email));

        setValidation({ username: validName, email: validEmail });

        if (validName && validEmail) {
            setUsers([{ ...user, address: account }, ...data.items]);
            setIsSubmited(true);
        }
    };

    useEffect(() => {
        setIsOpen(!Boolean(account));
    }, [account])

    useEffect(() => {
        if (user.username && user.email) {
            setIsSubmited(true);
            setUsers([{ ...user, address: account }, ...data.items]);
        }
    }, []);

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
                    {isSubmited ? (
                        <h1 className={classes.users__form__data}>
                            {user.username}
                        </h1>
                    ) : (
                        <div className={!validation.username ? classes.users__form__input : ""}>
                            <Input
                                type="text"
                                placeholder={
                                    "We will display your name in participation list"
                                }
                                onChange={(val) => {
                                    setValidation((prev) => ({
                                        ...prev,
                                        username: true,
                                    }));
                                    dispatch(setUsername(val))
                                }}
                            />
                            {!validation.username && (
                                <span>Name cannot be empty</span>
                            )}
                        </div>
                    )}
                    <p className={classes.users__form__label}>Email</p>
                    {isSubmited ? (
                        <h1 className={classes.users__form__data}>
                            {user.email}
                        </h1>
                    ) : (
                        <div className={!validation.email ? classes.users__form__input : ""}
                        >
                            <Input
                                type="email"
                                placeholder={
                                    "We will display your email in participation list "
                                }
                                onChange={(val) => {
                                    setValidation((prev) => ({
                                        ...prev,
                                        email: true,
                                    }));
                                    dispatch(setEmail(val))
                                }}
                            />
                            {!validation.email && <span>Invalid Email</span>}
                        </div>
                    )}

                    <Button
                        disabled={isSubmited}
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

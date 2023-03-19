import classes from "./index.module.scss";

function Orbit() {
    return (
        <div className={classes.orbit}>
            <svg
                width="249"
                height="492"
                viewBox="0 0 249 492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="3" cy="3" r="3" fill="#E75626" />
                <circle cx="3" cy="489" r="3" fill="#E75626" />
                <path
                    d="M3 489C137.205 489 246 380.205 246 246C246 111.795 137.205 3 3 3"
                    stroke="#E75626"
                    strokeWidth="0.5"
                />
                <circle cx="246" cy="246" r="3" fill="#E75626" />
            </svg>
            <svg
                width="249"
                height="492"
                viewBox="0 0 249 492"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="3" cy="3" r="3" fill="#E75626" />
                <circle cx="3" cy="489" r="3" fill="#E75626" />
                <path
                    d="M3 489C137.205 489 246 380.205 246 246C246 111.795 137.205 3 3 3"
                    stroke="#E75626"
                    strokeWidth="0.5"
                />
                <circle cx="246" cy="246" r="3" fill="#E75626" />
            </svg>
        </div>
    );
}

export default Orbit;

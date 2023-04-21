import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import styles from "./ServiceStyles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Accommodation() {
    return (
        <Router>
            <div className={cx("wrapper")}>
                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/hotel.svg" alt="flight" />
                    <span>Hotels</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/flight-hotel.svg"
                        alt="flight"
                    />
                    <span>Flights + Hotel</span>
                </Link>
            </div>
        </Router>
    );
}

export default Accommodation;

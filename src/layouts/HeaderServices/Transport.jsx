import styles from "./ServiceStyles.module.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Transport({ children, className }) {
    return (
        <Router>
            <div className={cx("wrapper")}>
                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/flights.svg" alt="flight" />
                    <span>Flights</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/flight-hotel.svg"
                        alt="flight"
                    />
                    <span>Flights + Hotel</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/airport-transfer.svg"
                        alt="flight"
                    />
                    <span>Airport Transfer</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/carrent.svg" alt="flight" />
                    <span>Car Rental</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/bus.svg" alt="flight" />
                    <span>Bus {"&"} Shuttle</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <div className={cx("ball__above")}></div>
                    <div className={cx("transition__ball")}></div>
                    <div className={cx("ball__below")}></div>
                    <img
                        src="./images/IconServices/statusflight.svg"
                        alt="flight"
                    />
                    <span>Flights Status</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <div className={cx("ball__above")}></div>
                    <div className={cx("transition__ball")}></div>
                    <div className={cx("ball__below")}></div>
                    <img src="./images/IconServices/price.svg" alt="flight" />
                    <span>Price Alert</span>
                </Link>
                <Link className={cx("item__link")}>{children}</Link>
            </div>
        </Router>
    );
}

export default Transport;

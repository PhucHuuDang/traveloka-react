import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Item.module.scss";
import FlightsItem from "./NavItem/Flights";

const cx = classNames.bind(styles);

function Items() {
    return (
        <Router>
            <div className={cx("container")}>
                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/flights.svg" alt="flight" />
                    <span>Flights</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/hotel.svg" alt="flight" />
                    <span>Hotels</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/flight-hotel-bold.svg"
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
                    <img
                        src="./images/IconServices/experience.svg"
                        alt="xperience"
                    />
                    <span>Xperience</span>
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

                    <img src="./images/IconServices/point.svg" alt="my point" />
                    <span>My Points</span>
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
            </div>
        </Router>
    );
}

export default Items;

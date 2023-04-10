import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./ServiceStyles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function ThingsTodo() {
    return (
        <Router>
            <div className={cx("wrapper")}>
                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/experience.svg"
                        alt="xperience"
                    />
                    <span>Xperience</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img
                        src="./images/IconServices/attraction.svg"
                        alt="attractions"
                    />
                    <span>Attractions</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <img src="./images/IconServices/tour.svg" alt="flight" />
                    <span>Tours</span>
                </Link>
            </div>
        </Router>
    );
}

export default ThingsTodo;

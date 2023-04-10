import styles from "./ServiceStyles.module.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";

const cx = classNames.bind(styles);

function TravelAddOns() {
    return (
        <Router>
            <div className={cx("wrapper")}>
                <Link className={cx("item__link")} to="/">
                    <div className={cx("ball__above")}></div>
                    <div className={cx("transition__ball")}></div>
                    <div className={cx("ball__below")}></div>

                    <img src="./images/IconServices/point.svg" alt="my point" />
                    <span>My Points</span>
                </Link>

                <Link className={cx("item__link")} to="/">
                    <div>
                        <div className={cx("ball__above")}></div>
                        <div className={cx("transition__ball")}></div>
                        <div className={cx("ball__below")}></div>
                    </div>
                    <img
                        src="./images/IconServices/voucher.svg"
                        alt="voucher"
                    />
                    <span>Gift Voucher</span>
                </Link>
            </div>
        </Router>
    );
}

export default TravelAddOns;

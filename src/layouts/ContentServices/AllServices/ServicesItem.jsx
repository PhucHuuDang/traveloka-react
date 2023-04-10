import classNames from "classnames/bind";
import styles from "./ServicesItem.module.scss";
import { ArrowBar } from "../../../../images/icon";
import Transport from "../../HeaderServices/Transport";
import { BrowserRouter as Router, Link } from "react-router-dom";

const cx = classNames.bind(styles);

function ServicesItem() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("overlay")}></div>
            <div className={cx("services__container")}>
                <div className={cx("services__container-left")}>
                    <Transport className={cx("transport")}>
                        <div className={cx("ball__above")}></div>
                        <div className={cx("transition__ball")}></div>
                        <div className={cx("ball__below")}></div>

                        <img
                            src="./images/IconServices/point.svg"
                            alt="my point"
                        />
                        <span>My Points</span>
                    </Transport>
                </div>
                <div className={cx("arrow-bar")}>
                    <ArrowBar className={cx("arrow")} />
                </div>
            </div>
        </div>
    );
}

export default ServicesItem;

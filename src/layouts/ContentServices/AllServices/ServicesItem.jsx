import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ServicesItem.module.scss";
import { ArrowBar } from "../../../../images/icon";
import Transport from "../../HeaderServices/Transport";
import FlightsItem from "./Items/NavItem/Flights";

const cx = classNames.bind(styles);

import Items from "./Items";

function ServicesItem() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("services__container")}>
                <div className={cx("services__container-left")}>
                    <Items />
                </div>
                <div className={cx("arrow-bar")}>
                    <ArrowBar className={cx("arrow")} />
                </div>

                <FlightsItem />
            </div>
        </div>
    );
}

export default ServicesItem;

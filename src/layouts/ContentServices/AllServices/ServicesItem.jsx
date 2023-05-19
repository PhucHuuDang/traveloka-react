import { BrowserRouter as Router, Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ServicesItem.module.scss";
import { ArrowBar } from "../../../../images/icon";
import Transport from "../../HeaderServices/Transport";
import FlightsItem from "./Items/NavItem/Flights";
import MultiCities from "./Items/NavItem/Flight/MultiCites";
import HotelItem from "./Items/NavItem/Hotel/HotelItem";

const cx = classNames.bind(styles);

import Items from "./Items";
import { useState } from "react";

function ServicesItem({ className }) {
    const [checkHeight, setCheckHeight] = useState(true);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("services__container")}>
                <div
                    className={cx("services__container-left")}
                    style={{ height: checkHeight ? "295px" : "" }}
                >
                    <Items />
                </div>
                <div className={cx("arrow-bar")}>
                    <ArrowBar className={cx("arrow")} />
                </div>
                {/* <FlightsItem className={className} /> */}
                <HotelItem />
            </div>
        </div>
    );
}

export default ServicesItem;

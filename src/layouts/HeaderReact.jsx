import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import { AiOutlineMenu } from "react-icons/ai";
import { DownLoadIcon } from "../../images/icon";
import Tippy from "@tippyjs/react/headless";

import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Transport from "./HeaderServices/Transport";
import Accommodation from "./HeaderServices/Accommodation";
import ThingsTodo from "./HeaderServices/ThingsToDo";
import TravelAddOns from "./HeaderServices/TravelAddOns";
import Advertisement from "./HeaderServices/Ads/Advertisement";
import ServicesItem from "./ContentServices/AllServices";

const cx = classNames.bind(styles);

function HeaderReact() {
    const [hide, setHide] = useState();

    const renderTrans = () => {
        return (
            <div className={cx("shown")}>
                <Wrapper>
                    <Transport />
                </Wrapper>
            </div>
        );
    };

    const renderAccommodation = () => {
        return (
            <div className={cx("shown")}>
                <Wrapper>
                    <Accommodation />
                </Wrapper>
            </div>
        );
    };

    const renderThings = () => {
        return (
            <div className={cx("shown")}>
                <Wrapper>
                    <ThingsTodo />
                </Wrapper>
            </div>
        );
    };

    const renderTravelAddOn = () => {
        return (
            <div className={cx("shown")}>
                <Wrapper>
                    <TravelAddOns />
                </Wrapper>
            </div>
        );
    };

    return (
        <div className={cx("header")}>
            <nav className={cx("header__container")}>
                <div className={cx("header-menu-icon")}>
                    <img
                        className={cx("header__menu")}
                        src="./images/menuIcon.svg"
                        alt=""
                    />
                    <a href="#">
                        <img src="./images/logoTraveloka.svg" alt="" />
                    </a>
                </div>

                <div className={cx("header__container-item")}>
                    <div className={cx("header__item")}>
                        <DownLoadIcon className={cx("space-icon")} />
                        <a href="#">Download App</a>
                    </div>

                    <div className={cx("header__item")}>
                        <img
                            className={cx("space-icon")}
                            src="./images/corporate.svg"
                            alt="corporate"
                        />
                        <a href="#">Partner with Us</a>
                    </div>

                    <div className={cx("header__item")}>
                        <img
                            className={cx("space-icon")}
                            src="./images/saveIcon.svg"
                            alt="save"
                        />
                        <a href="#">Saved</a>
                    </div>

                    <div className={cx("header__item")}>
                        <img
                            className={cx("space-icon")}
                            src="./images/bookPosition.svg"
                            alt="position"
                        />
                        <a href="#">My Booking</a>
                    </div>

                    <div className={cx("header__item")}>
                        <img
                            className={cx("star-icon")}
                            src="./images/star.svg"
                            alt="star icon"
                        />
                        <a href="#">VND</a>
                        <img
                            className={cx("arrow-Icon")}
                            src="./images/arrow.svg"
                            alt="arrow icon"
                        />
                    </div>

                    <div className={cx("header__item")}>
                        <img
                            className={cx("login-Icon")}
                            src="./images/loginIcon.svg"
                            alt="login icon"
                        />
                        <a href="#">Log In</a>
                        <img
                            className={cx("arrow-Icon")}
                            src="./images/arrow.svg"
                            alt="arrow icon"
                        />
                    </div>

                    <div className={cx("sign-in")}>
                        <a href="#">Registry</a>
                    </div>
                </div>
            </nav>
            <div className={cx("header__services")}>
                <div className={cx("header__services-items")}>
                    <div>
                        <Tippy
                            // visible
                            interactive
                            offset={[37, -4]}
                            placement="bottom"
                            trigger="click"
                            render={renderTrans}
                        >
                            <div className={cx("services-items")}>
                                <div
                                    className={cx("item-details")}
                                    onClick={renderTrans}
                                >
                                    Transport
                                </div>
                                <img
                                    src="./images/arrowBold.svg"
                                    alt="arrowBold icon"
                                />
                            </div>
                        </Tippy>
                    </div>

                    <Tippy
                        interactive
                        offset={[11, -4]}
                        placement="bottom"
                        trigger="click"
                        render={renderAccommodation}
                    >
                        <div className={cx("services-items")}>
                            <div className={cx("item-details")}>
                                Accommodation
                            </div>
                            <img
                                src="./images/arrowBold.svg"
                                alt="arrowBold icon"
                            />
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        offset={[27, -4]}
                        placement="bottom"
                        trigger="click"
                        render={renderThings}
                    >
                        <div className={cx("services-items")}>
                            <div className={cx("item-details")}>
                                Things to do
                            </div>
                            <img
                                src="./images/arrowBold.svg"
                                alt="arrowBold icon"
                            />
                        </div>
                    </Tippy>
                    <Tippy
                        interactive
                        offset={[15, -4]}
                        placement="bottom"
                        trigger="click"
                        render={renderTravelAddOn}
                    >
                        <div className={cx("services-items")}>
                            <div className={cx("item-details")}>
                                Travel Add-ons
                            </div>
                            <img
                                src="./images/arrowBold.svg"
                                alt="arrowBold icon"
                            />
                        </div>
                    </Tippy>
                </div>
            </div>
            {/* advertisement */}
            <div>
                <Advertisement />
            </div>
            <div>
                <ServicesItem />
            </div>
        </div>
    );
}

export default HeaderReact;

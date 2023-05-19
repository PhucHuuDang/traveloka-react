import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import Tippy from "@tippyjs/react";
import styles from "./HotelStyle.module.scss";
import classNames from "classnames/bind";
import {
    CalendarIcon,
    ArrowSeatIcon,
    SearchHotels,
    SearchIcon,
    PayCheckIn,
} from "../../../../../../../images/icon";
// import { SearchHotels, ArrowSeatIcon } from "../../../../../../../images/icon";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Wrapper from "../../../../../../Wrapper/Wrapper";
// import Wrapper from "./Wrapper/Wrapper";

import { useState, useRef, useEffect } from "react";
import { Fragment } from "react";

const cx = classNames.bind(styles);

function HotelItem() {
    const [borderPlace, setBorderPlace] = useState(false);

    // calendar
    const [dateCheckIn, setDateCheckIn] = useState("");
    const [dateStyle, setDateStyle] = useState(false);
    const [dateValue, setDateValue] = useState(() => new Date());

    // night
    const [nightValue, setNightValue] = useState(() => new Date());
    const [isDurationShown, setIsDurationShown] = useState(false);
    const [selectNight, setSelectNight] = useState("1 night");
    const [checkOutTime, setCheckOutTime] = useState("");

    const initialState = Array.from({ length: 32 }, (item, index) => {
        // console.log(item);
        if (index === 1) {
            return {
                backgroundColor: "rgba(1, 148, 243, 1)",
                color: "rgb(1, 148, 243)",
                disPlay: "block",
            };
        } else {
            return {};
        }
    });

    const [state, setState] = useState(initialState);
    console.log(state[0].color);

    const handleChangeBorder = () => {
        setBorderPlace((prev) => !prev);
    };

    const renderPlaces = () => {
        return (
            <Wrapper className={cx("container")}>
                <div className={cx("wrapper__places")}>
                    <div className={cx("header")}>
                        <span>Popular Destination</span>
                    </div>

                    <div className={cx("place__items")}>
                        <div className={cx("city__info")}>
                            <span>Da Nang</span>
                            <div className={cx("region-text")}>
                                <span className={cx("text")}>Region</span>
                            </div>
                        </div>

                        <div className={cx("region__info")}>
                            <span className={cx("venue-text")}>Vietnam</span>
                            <span className={cx("numberOf-hotel")}>
                                1,616 hotels nearby
                            </span>
                        </div>
                    </div>

                    <div className={cx("place__items")}>
                        <div className={cx("city__info")}>
                            <span>Da Nang</span>
                            <div className={cx("region-text")}>
                                <span className={cx("text")}>Region</span>
                            </div>
                        </div>

                        <div className={cx("region__info")}>
                            <span className={cx("venue-text")}>Vietnam</span>
                            <span className={cx("numberOf-hotel")}>
                                1,616 hotels nearby
                            </span>
                        </div>
                    </div>

                    <div className={cx("place__items")}>
                        <div className={cx("city__info")}>
                            <span>Da Nang</span>
                            <div className={cx("region-text")}>
                                <span className={cx("text")}>Region</span>
                            </div>
                        </div>

                        <div className={cx("region__info")}>
                            <span className={cx("venue-text")}>Vietnam</span>
                            <span className={cx("numberOf-hotel")}>
                                1,616 hotels nearby
                            </span>
                        </div>
                    </div>
                </div>
            </Wrapper>
        );
    };

    const renderCalendarCheckIn = () => {
        return (
            <Group className={cx("group")}>
                <DatePicker
                    className={cx("test-calendar")}
                    numberOfColumns={2}
                    size="lg"
                    minDate={new Date()}
                    // value={stringDate}
                    value={dateValue}
                    // onClick={test}
                    // if we try to setSate in onChange we will get the error bad code
                    onChange={setDateValue}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: -105,
                        // borderRadius: "20px",
                        transition: "ease 1s",
                    }}
                />
            </Group>
        );
    };

    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };

    const getDateLocal = dateValue.toLocaleDateString("en-VN", options);

    const currentDate = new Date(); // Current date

    const year = currentDate.getFullYear(); // Get the current year
    const month = currentDate.getMonth(); // Get the current month (zero-based)

    // Create a new date for the first day of the month
    const firstDayOfMonth = new Date(year, month, 1);

    // Get the last day of the month by subtracting 1 day from the next month's first day
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Get the range of dates in the current month
    const startDate = firstDayOfMonth.getDate();
    const endDate = lastDayOfMonth.getDate();

    // Create an array to store all the dates
    const allDates = [];
    const anotherArray = [];
    // const currentDate = new Date(year, month, startDate);
    for (let i = startDate; i <= endDate; i++) {
        const currentDate = new Date(year, month, i);
        allDates.push(i);
        if (currentDate >= new Date()) {
            const dateDetails = currentDate.toLocaleDateString("en-VN", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
            });
            currentDate.setDate(currentDate.getDate() + 1);
            anotherArray.push(dateDetails);
            // currentDate.setDate(currentDate.getDate() + 1);
            console.log(dateDetails);
        }
    }

    //     const allDates = [];
    // const anotherArray = [];
    // for (let i = startDate; i <= endDate; i++) {
    //   const currentDate = new Date(year, month, i);

    //   // Check if the current date is greater than or equal to the current day
    //   if (currentDate >= new Date()) {
    //     allDates.push(i);
    //     const dateDetails = currentDate.toLocaleDateString("en-VN", {
    //       weekday: "long",
    //       month: "long",
    //       day: "numeric",
    //       year: "numeric",
    //     });
    //     anotherArray.push(dateDetails);
    //   }
    // }

    // console.log(allDates); // Output: Array of dates in the current month

    const mappedArray = allDates.map((detail, index) => {
        const detailArray = anotherArray[index];
        return { detail, detailArray };
    });

    // Duration render

    const renderDuration = () => {
        return (
            <Wrapper className={cx("wrapper__duration")}>
                <div className={cx("duration__container-block")}>
                    <div className={cx("duration__container")}>
                        {mappedArray.map(({ detail, detailArray }) => {
                            const handleChangeColorNight = (index) => {
                                // console.log(testStateChangeColor.length);
                                const newColor = state.map((item, i) => {
                                    if (i === index) {
                                        console.log(i, index);
                                        setSelectNight(() => {
                                            let change =
                                                detail === 1
                                                    ? detail + " " + "night"
                                                    : detail + " " + "nights";

                                            return change;
                                        });

                                        setCheckOutTime(() => {
                                            return detailArray;
                                        });

                                        return {
                                            disPlay: "block",
                                            backgroundColor:
                                                "rgba(1, 148, 243, 1)",
                                            color: "rgb(1, 148, 243)",
                                        };
                                    } else {
                                        return {
                                            backgroundColor: "",
                                            color: "rgb(3, 18, 26)",
                                        };
                                    }
                                });
                                setState(newColor);
                                setIsDurationShown(false);
                            };
                            return (
                                <div
                                    className={cx("container__items")}
                                    key={detail}
                                    onClick={() =>
                                        handleChangeColorNight(detail)
                                    }
                                >
                                    <div className={cx("fragment")}>
                                        {/* <div className={cx("fragment")}> */}
                                        <div
                                            className={cx("circle")}
                                            style={{
                                                backgroundColor:
                                                    state[detail]
                                                        .backgroundColor,
                                                display: state[detail].disPlay,
                                            }}
                                        ></div>
                                        <h3
                                            className={cx("h3-class")}
                                            style={{
                                                color: state[detail].color,
                                            }}
                                        >
                                            {detail === 1
                                                ? detail + " " + "night"
                                                : detail + " " + "nights"}
                                            {/* {console.log(detail)} */}
                                            {/* {console.log(detailArray)} */}
                                        </h3>
                                        <h4
                                            className={cx("h4-class")}
                                            style={{
                                                color: state[detail].color,
                                            }}
                                        >
                                            {detailArray}
                                        </h4>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        );
    };

    const renderGuestAndRoom = () => {
        return (
            <Wrapper className={cx("guestroom__wrapper")}>
                <div className={cx("guestroom__container")}>
                    <div className={cx("common__block")}>
                        <div className={cx("guest-group__block")}>
                            <img
                                src="./images/NavIcon/adult-guest.svg"
                                alt=""
                            />
                            <span>Adult</span>
                        </div>

                        <div className={cx("count__block")}>
                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/distract.svg"
                                    alt="distract"
                                />
                            </div>

                            <div className={cx("number")}>1</div>

                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/plusIcon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cx("common__block")}>
                        <div className={cx("guest-group__block")}>
                            <img
                                src="./images/NavIcon/children-guest.svg"
                                alt=""
                            />
                            <span>Children</span>
                        </div>

                        <div className={cx("count__block")}>
                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/distract.svg"
                                    alt="distract"
                                />
                            </div>

                            <div className={cx("number")}>1</div>

                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/plusIcon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>

                    <div className={cx("common__block")}>
                        <div className={cx("guest-group__block")}>
                            <img src="./images/NavIcon/room-guest.svg" alt="" />
                            <span>Room</span>
                        </div>

                        <div className={cx("count__block")}>
                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/distract.svg"
                                    alt="distract"
                                />
                            </div>

                            <div className={cx("number")}>1</div>

                            <div className={cx("operator")}>
                                <img
                                    src="./images/NavIcon/plusIcon.svg"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx("done-btn")}>Done</div>
                </div>
            </Wrapper>
        );
    };
    return (
        <div className={cx("wrapper")}>
            <Router>
                <div className={cx("search__hotels")}>
                    <Link to="https://www.traveloka.com/en-vn/hotel/last-view">
                        <SearchHotels />
                        Recently Viewed Hotel
                    </Link>
                </div>
            </Router>

            <div className={cx("places__block")}>
                <span>City, destination, or hotel name</span>

                <Tippy
                    placement="bottom"
                    render={borderPlace && renderPlaces}
                    interactive
                    visible={borderPlace}
                    onClickOutside={() => setBorderPlace((prev) => !prev)}
                >
                    <div
                        className={cx("choose__place-block")}
                        style={{
                            border: borderPlace
                                ? "2px solid rgb(1, 148, 243)"
                                : "1px solid rgba(206, 208, 209, 1)",

                            transition: "border 200ms",
                        }}
                        onClick={handleChangeBorder}
                    >
                        <img
                            src="./images/NavIcon/location-icon.svg"
                            alt="location icons"
                        />
                        <input
                            type="text"
                            placeholder="City, hotel, place to go"
                        />
                    </div>
                </Tippy>
            </div>

            <div className={cx("date__block")}>
                <div className={cx("common__block")}>
                    <span>Check-in</span>
                    <Tippy
                        placement="bottom"
                        interactive
                        visible={dateStyle}
                        render={dateStyle && renderCalendarCheckIn}
                        onClickOutside={() => setDateStyle(false)}
                    >
                        <div
                            className={cx("value__block")}
                            style={{
                                border: dateStyle
                                    ? "2px solid rgb(1, 148, 243)"
                                    : "1px solid rgba(206, 208, 209, 1)",
                                transition: "border 300ms",
                            }}
                            onClick={() => setDateStyle((prev) => !prev)}
                        >
                            <CalendarIcon />
                            <div className={cx("content")}>{getDateLocal}</div>
                        </div>
                    </Tippy>
                </div>

                <div className={cx("common__block")}>
                    <span>Duration</span>

                    <Tippy
                        interactive
                        visible={isDurationShown}
                        render={isDurationShown && renderDuration}
                        placement="bottom"
                        onClickOutside={() => setIsDurationShown(false)}
                    >
                        <div
                            className={cx("value__block")}
                            onClick={() => setIsDurationShown((prev) => !prev)}
                        >
                            <img
                                src="./images/NavIcon/moon.svg"
                                alt="moon icon"
                            />

                            <div className={cx("content")}>{selectNight}</div>
                            <img
                                src="./images/NavIcon/arrow.svg"
                                alt="arrow icon"
                                className={cx("arrow-icon")}
                            />
                        </div>
                    </Tippy>
                </div>

                <div className={cx("common__block")}>
                    <span>Check-out</span>
                    <div className={cx("value__block")}>
                        {/* <CalendarIcon /> */}
                        <div className={cx("content")}>{checkOutTime}</div>
                    </div>
                </div>
            </div>

            <div className={cx("guest-rooms__container")}>
                <span className={cx("guest-text")}>Guest and Rooms</span>

                <div className={cx("container-block")}>
                    <Tippy
                        interactive
                        visible
                        render={renderGuestAndRoom}
                        placement="bottom"
                    >
                        <div className={cx("guest-block")}>
                            <img
                                src="./images/NavIcon/guest-icon.svg"
                                alt="guest"
                            />
                            <span>1 Adult(s), 0 Child, 1 Room</span>
                            <img
                                src="./images/NavIcon/arrow.svg"
                                alt="arrow icon"
                                className={cx("arrow-icon")}
                            />
                        </div>
                    </Tippy>

                    <div className={cx("search-block")}>
                        <SearchIcon />
                        <span>Search Hotels</span>
                    </div>
                </div>

                <div className={cx("business-trip")}>
                    <input type="checkbox" id="name" />
                    <label htmlFor="name">Going on business trip</label>
                    <Tippy
                        content="When you are tick the checkbox, you will be shown accommodations that are suitable for the business trips"
                        backgroundColor="black"
                        maxWidth={200}
                        animation="fade"
                    >
                        <img
                            src="./images/NavIcon/question-mark-icon.svg"
                            alt=""
                        />
                    </Tippy>
                </div>

                <Router>
                    <Link to="https://www.traveloka.com/en-vn/pay-at-hotel">
                        <div className={cx("pay-block")}>
                            <PayCheckIn />
                            <span>Pay upon Check-in</span>
                        </div>
                    </Link>
                </Router>
            </div>
        </div>
    );
}

export default HotelItem;

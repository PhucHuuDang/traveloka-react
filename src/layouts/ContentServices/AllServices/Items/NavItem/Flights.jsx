import Tippy from "@tippyjs/react";
import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CalendarIcon, ArrowSeatIcon } from "../../../../../../images/icon";
import classNames from "classnames/bind";
import styles from "./StylesNavItem.module.scss";
import Wrapper from "../../../../../Wrapper/Wrapper";
import { useEffect, useState, useRef, Fragment } from "react";

import "tippy.js/animations/scale.css";

const cx = classNames.bind(styles);

function FlightsItem() {
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [check, setCheck] = useState(false);
    const [departureWay, setDepartureWay] = useState("TP HCM (SGN)");
    const [returnWay, setReturnWay] = useState("Buôn Ma Thuột (BMV)");
    // passengers notice
    const [notice, setNotice] = useState(false);
    const [done, setDone] = useState(false);
    // seat class notice
    const [renderSeatBlock, setRenderSeatBlock] = useState(false);
    const [seatClass, setSeatClass] = useState("Economy");

    const [valueDate, setValueDate] = useState(null, null);

    const [date, setDate] = useState(new Date());

    const [changeColor, setChangeColor] = useState([
        {
            // backgroundColor: "rgba(1, 148, 243, 1)",
            // color: "rgba(1, 148, 243, 1)",
        },

        {
            // backgroundColor: "rgba(1, 148, 243, 1)",
            // color: "rgba(1, 148, 243, 1)",
        },

        {
            // backgroundColor: "rgba(1, 148, 243, 1)",
            // color: "rgba(1, 148, 243, 1)",
        },

        {
            // backgroundColor: "rgba(1, 148, 243, 1)",
            // color: "rgba(1, 148, 243, 1)",
        },
    ]);

    const [visibleCalendar, setVisibleCalendar] = useState(false);

    // handle change color when click chose seat class
    const [activeStyle, setActiveStyle] = useState(null);

    // const handleChangeColor = (index) => {
    //     console.log(index);
    //     const styles = [...changeColor];
    //     styles[index] = {
    //         backgroundColor: "rgba(1, 148, 243, 1)",
    //         color: "rgba(1, 148, 243, 1)",
    //     };
    //     setChangeColor(styles);
    // };

    const ref = useRef();

    const handleChangeColor = (index) => {
        const newStyle = changeColor.map((item, i) => {
            if (i === index) {
                // console.log(changeColor);
                // console.log(index);
                return {
                    backgroundColor: "rgba(1, 148, 243, 1)",
                    color: "rgba(1, 148, 243, 1)",
                };
            } else {
                return {
                    backgroundColor: "",
                    color: "rgb(3, 18, 26)",
                };
            }
        });
        setChangeColor(newStyle);
        setActiveStyle(index);
    };

    // handle change value in input way flight
    const handleChangeDepartureWay = (e) => {
        setDepartureWay(e.target.value);
    };

    const handleChangeReturnWay = (e) => {
        setReturnWay(e.target.value);
    };

    // handle in booking seat of adult

    // handle logic show condition passengers
    const handleMoreSeat = () => {
        if (adult === 7) {
            setNotice(true);
            setTimeout(() => {
                setNotice(false);
            }, 2000);
            return "";
        }

        setAdult((prev) => prev + 1);
    };

    const handleMinusSeat = () => {
        if (adult === 0) {
            return "";
        }
        setAdult((prev) => prev - 1);
    };

    // handle in booking seat of child
    const handleMoreSeatChild = () => {
        if (child === 6) {
            // setConditionContent();
            alert("cannot booking more than 7 in each booking");
            return "";
        }
        setChild((prev) => prev + 1);
    };

    const handleMinusSeatChild = () => {
        if (child === 0) {
            return "";
        }
        setChild((prev) => prev - 1);
    };

    // handle in booking seat of infant
    const handleMoreSeatInfant = () => {
        if (infant === 1) {
            alert("cannot booking more than 7 in each booking");
            return "";
        }
        setInfant((prev) => prev + 1);
    };

    const handleMinusSeatInfant = () => {
        if (infant === 0) {
            return "";
        }
        setInfant((prev) => prev - 1);
    };

    // handle show passengers

    const showPassengers = () => {
        setDone(true);
    };

    // handle hide passengers
    // const handleHideButton = (e) => {
    //     setDone(false);
    // };

    // handle block limit passengers
    const blockLimitPassengers = () => {
        return (
            <div className={cx("container-content")}>
                Only seven (7) adult and child <br /> passengers are allowed in{" "}
                <br />
                each booking
            </div>
        );
    };

    // render return date
    // const RenderReturnDate = () => {
    //     return (
    //         <div className={cx("calendar")}>
    //             <CalendarIcon />
    //             Apr 13, 2023
    //         </div>
    //     );
    // };

    // handle click iem
    const handleChangeText = (e) => {
        console.log(e.target);
        setSeatClass(e.target.innerText);
    };

    //renderCalendar

    const renderCalendar = () => {
        return (
            <Group className={cx("group")}>
                <DatePicker
                    className={cx("test-calendar")}
                    numberOfColumns={2}
                    size="lg"
                    // defaultDate={new Date()}
                    minDate={new Date()}
                    value={valueDate}
                    // if we try to setSate in onChange we will get the error bad code
                    onChange={setValueDate(valueDate)}
                    style={{
                        position: "absolute",
                        top: 0,
                        // borderRadius: "20px",
                        transition: "ease 1s",
                    }}
                />
            </Group>
        );
    };

    // handle block seat class
    const blockSeatClass = () => {
        return (
            <div>
                <Wrapper>
                    <div className={cx("container__seat-class")}>
                        <Fragment>
                            <div
                                className={cx("item__contain")}
                                onClick={(e) =>
                                    handleChangeColor(0) && console.log(e)
                                }
                            >
                                <div
                                    className={cx("circle")}
                                    style={{
                                        backgroundColor:
                                            changeColor[0].backgroundColor,
                                    }}
                                ></div>
                                <h4
                                    style={{
                                        color: changeColor[0].color,
                                    }}
                                    onClick={handleChangeText}
                                >
                                    Economy
                                </h4>
                            </div>

                            <div
                                className={cx("item__contain")}
                                onClick={() =>
                                    handleChangeColor(1) && handleClickItem
                                }
                            >
                                <div
                                    className={cx("circle")}
                                    style={{
                                        backgroundColor:
                                            changeColor[1].backgroundColor,
                                    }}
                                ></div>

                                <h4
                                    style={{ color: changeColor[1].color }}
                                    onClick={handleChangeText}
                                >
                                    Premium Economy
                                    {/* {setSeatClass("Premium Economy")} */}
                                </h4>
                            </div>

                            <div
                                className={cx("item__contain")}
                                onClick={() => handleChangeColor(2)}
                            >
                                <div
                                    className={cx("circle")}
                                    style={{
                                        backgroundColor:
                                            changeColor[2].backgroundColor,
                                    }}
                                ></div>
                                <h4
                                    style={{
                                        color: changeColor[2].color,
                                    }}
                                    onClick={handleChangeText}
                                >
                                    Business
                                </h4>
                            </div>

                            <div
                                className={cx("item__contain")}
                                onClick={() => handleChangeColor(3)}
                            >
                                <div
                                    className={cx("circle")}
                                    style={{
                                        backgroundColor:
                                            changeColor[3].backgroundColor,
                                    }}
                                ></div>
                                <h4
                                    style={{ color: changeColor[3].color }}
                                    onClick={handleChangeText}
                                >
                                    First Class
                                </h4>
                            </div>
                        </Fragment>
                    </div>
                </Wrapper>
            </div>
        );
    };

    const handlePassenger = () => {
        return (
            <div className={cx("shown")}>
                <Wrapper>
                    <div className={cx("container__block-passengers")}>
                        <div className={cx("adult-block")}>
                            <img src="./images/NavIcon/adult.svg" alt="adult" />
                            <div className={cx("content")}>
                                <h4>Adult</h4>
                                <span>(age 12 and over)</span>
                            </div>
                        </div>

                        <div className={cx("add__seat-more")}>
                            <div>
                                <Tippy
                                    arrow
                                    offset={[-50, 110]}
                                    delay={[500, 0]}
                                    placement="top"
                                    visible={notice}
                                    interactive
                                    animation={{ duration: [3000, 2000] }}
                                    render={notice && blockLimitPassengers}
                                >
                                    <img
                                        onClick={handleMinusSeat}
                                        src="./images/NavIcon/distract.svg"
                                        alt="distract"
                                    />
                                </Tippy>
                            </div>
                            <div className={cx("number")}>{adult}</div>
                            <img
                                onClick={handleMoreSeat}
                                src="./images/NavIcon/plusIcon.svg"
                                alt="distract"
                            />
                        </div>
                    </div>

                    <div className={cx("container__block-passengers")}>
                        <div className={cx("adult-block")}>
                            <img src="./images/NavIcon/child.svg" alt="child" />
                            <div className={cx("content")}>
                                <h4>Child</h4>
                                <span>(age 2 - 11)</span>
                            </div>
                        </div>

                        <div className={cx("add__seat-more")}>
                            <img
                                onClick={handleMinusSeatChild}
                                src="./images/NavIcon/distract.svg"
                                alt="distract"
                            />
                            <div className={cx("number")}>{child}</div>
                            <img
                                onClick={handleMoreSeatChild}
                                src="./images/NavIcon/plusIcon.svg"
                                alt="distract"
                            />
                        </div>
                    </div>

                    <div className={cx("container__block-passengers")}>
                        <div className={cx("adult-block")}>
                            <img src="./images/NavIcon/child.svg" alt="child" />
                            <div className={cx("content")}>
                                <h4>Infant</h4>
                                <span>(below age 2)</span>
                            </div>
                        </div>

                        <div className={cx("add__seat-more")}>
                            <img
                                onClick={handleMinusSeatInfant}
                                src="./images/NavIcon/distract.svg"
                                alt="distract"
                            />
                            <div className={cx("number")}>{infant}</div>
                            <img
                                onClick={handleMoreSeatInfant}
                                src="./images/NavIcon/plusIcon.svg"
                                alt="distract"
                            />
                        </div>
                    </div>
                    <div className={cx("button")}>
                        {/* onClick={handleHideButton}  */}
                        <button onClick={() => setDone(false)}>Done</button>
                    </div>
                </Wrapper>
            </div>
        );
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container__flight")}>
                <div className={cx("container__flight-info")}>
                    <div className={cx("choice-block")}>
                        <div className={cx("destination")}>
                            <label
                                className={cx("container-radio")}
                                htmlFor="labelRadio-first"
                            >
                                <input
                                    className={cx("radio__input")}
                                    type="radio"
                                    name="radioName"
                                    id="labelRadio-first"
                                    // checked
                                    defaultChecked
                                />
                                <dir className={cx("radio__radio")}></dir>
                                <h4>One-way / Round-trip</h4>
                            </label>
                        </div>

                        <div
                            className={cx("destination")}
                            // aria-checked="false"
                            // role="radio"
                            // tabIndex="1"
                        >
                            <label
                                id={"two"}
                                className={cx("container-radio")}
                                htmlFor="labelRadio-second"
                            >
                                <input
                                    className={cx("radio__input")}
                                    type="radio"
                                    name="radioName"
                                    id="labelRadio-second"
                                    // checked
                                />
                                <dir className={cx("radio__radio")}></dir>
                                <h4>Multi-city</h4>
                            </label>
                        </div>

                        <div className={cx("city")}></div>
                    </div>
                    <Router>
                        <Link to="https://www.traveloka.com/en-vn/flight/discover">
                            <div className={cx("map")}>
                                <img
                                    src="./images/IconServices/mapIcon.svg"
                                    alt=""
                                />
                                <div className={cx("map-block")}>Open Map</div>
                            </div>
                        </Link>
                    </Router>
                </div>

                <div className={cx("container__info-way")}>
                    <div className={cx("way-block")}>
                        <div className={cx("info")}>
                            <h4>From</h4>
                            <div className={cx("address")}>
                                <img
                                    src="./images/NavIcon/flight-from.svg"
                                    alt="flight from"
                                />
                                <input
                                    type="text"
                                    placeholder="TP HCM (SGN)"
                                    value={departureWay}
                                    // onChange={handleChangeDepartureWay}
                                    onChange={(e) =>
                                        setDepartureWay(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                        <div className={cx("info")}>
                            <img
                                className={cx("reverse-icon")}
                                src="./images/NavIcon/reverse.svg"
                                alt="flight to"
                            />
                        </div>
                        <div className={cx("info")}>
                            <h4>To</h4>
                            <div className={cx("address")}>
                                <img
                                    src="./images/NavIcon/flight-to.svg"
                                    alt="flight to"
                                />
                                <input
                                    type="text"
                                    placeholder="TP HCM (SGN)"
                                    value={returnWay}
                                    // onChange={handleChangeReturnWay}
                                    onChange={(e) =>
                                        setReturnWay(e.target.value)
                                    }
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Tippy
                            interactive
                            placement="bottom"
                            // trigger="click"
                            visible={done}
                            render={done && handlePassenger}
                            // toggle
                            onClickOutside={() => setDone(false)}
                        >
                            <div
                                className={cx("passengers-block")}
                                // set toggle
                                onClick={() => setDone((prev) => !prev)}
                            >
                                <div className={cx("info-passengers")}>
                                    <h4>No. of Passengers</h4>
                                    <div
                                        className={cx("passenger__seat")}
                                        style={{
                                            border: done
                                                ? "2px solid rgb(1, 148, 243)"
                                                : "1px solid rgba(206, 208, 209, 1)",

                                            transition: "border 200ms",
                                        }}
                                    >
                                        <img
                                            src="./images/NavIcon/passengers.svg"
                                            alt="passengers"
                                        />
                                        {adult} Adult, {child} Child, {infant}{" "}
                                        Infant
                                    </div>
                                </div>
                            </div>
                        </Tippy>
                    </div>
                </div>

                <dir className={cx("container__date")}>
                    <dir className={cx("container__date-block")}>
                        <dir className={cx("info-date")}>
                            <h4>Departure Date</h4>
                            <Tippy
                                interactive
                                placement="left-end"
                                offset={[5, 0]}
                                visible={visibleCalendar}
                                render={visibleCalendar && renderCalendar}
                                onClickOutside={() => setVisibleCalendar(false)}
                            >
                                <div
                                    className={cx("calendar")}
                                    onClick={() =>
                                        setVisibleCalendar((show) => !show)
                                    }
                                    style={{
                                        border: visibleCalendar
                                            ? "2px solid rgb(1, 148, 243)"
                                            : "1px solid rgba(206, 208, 209, 1)",
                                        transition: "border 300ms",
                                    }}
                                    // value={valueDate}
                                >
                                    <CalendarIcon />
                                    Apr {valueDate}, 2023
                                </div>
                            </Tippy>
                        </dir>

                        <dir className={cx("info-date")}>
                            <Tippy>
                                <label htmlFor="date">
                                    <input
                                        type="checkbox"
                                        name="date"
                                        id="date"
                                        checked={check}
                                        onChange={() => setCheck(!check)}
                                    />
                                    Return Date
                                </label>
                            </Tippy>
                            <div className={cx("calendar")}>
                                <CalendarIcon />
                                Apr 13, 2023
                            </div>
                            {/* <RenderReturnDate /> */}
                        </dir>
                    </dir>

                    <div className={cx("seats-block")}>
                        <div className={cx("info-seats")}>
                            <h4>Seat class</h4>
                            <Tippy
                                interactive
                                visible={renderSeatBlock}
                                render={renderSeatBlock && blockSeatClass}
                                placement="bottom"
                                offset={[0, 5]}
                                onClickOutside={() => setRenderSeatBlock(false)}
                            >
                                <div
                                    className={cx("seat-content")}
                                    style={{
                                        border: renderSeatBlock
                                            ? "2px solid rgb(1, 148, 243)"
                                            : "1px solid rgba(206, 208, 209, 1)",
                                        transition: "border 200ms",
                                    }}
                                    onClick={() =>
                                        // toggle
                                        setRenderSeatBlock((prev) => !prev)
                                    }
                                >
                                    <img
                                        src="./images/NavIcon/seat-icon.svg"
                                        alt="seat-icon"
                                    />
                                    <h4>{seatClass}</h4>
                                    <ArrowSeatIcon />
                                </div>
                            </Tippy>
                        </div>
                        {/* <Group className={cx("group")}>
                            <DatePicker className={cx("test-calendar")} />
                        </Group> */}
                    </div>
                </dir>
            </div>
        </div>
    );
}

export default FlightsItem;

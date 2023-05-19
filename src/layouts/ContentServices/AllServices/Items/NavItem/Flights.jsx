import Tippy from "@tippyjs/react";
import { Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    CalendarIcon,
    ArrowSeatIcon,
    SearchIcon,
} from "../../../../../../images/icon";
import classNames from "classnames/bind";
import styles from "./StylesNavItem.module.scss";
import Wrapper from "../../../../../Wrapper/Wrapper";
import { useEffect, useState, useRef, Fragment } from "react";
import MultiCities from "./Flight/MultiCites";

// import "tippy.js/animations/scale.css";

const cx = classNames.bind(styles);

function FlightsItem({ setCheckHeight }) {
    // check filed check
    const [oneWay, setOneWay] = useState(true);

    // set passengers notice
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const [notice, setNotice] = useState(false);
    const [noticeChild, setNoticeChild] = useState(false);
    const [noticeInfant, setNoticeInfant] = useState(false);

    // set check
    const [check, setCheck] = useState(false);
    const [departureWay, setDepartureWay] = useState("TP HCM (SGN)");
    const [returnWay, setReturnWay] = useState("Buôn Ma Thuột (BMV)");
    // passengers notice
    const [done, setDone] = useState(false);
    // seat class notice
    const [renderSeatBlock, setRenderSeatBlock] = useState(false);
    const [seatClass, setSeatClass] = useState("Economy");

    // const [isActiveClass, setIsActiveClass] = useState(false);

    const [changeColor, setChangeColor] = useState([
        {
            backgroundColor: "rgba(1, 148, 243, 1)",
            color: "rgba(1, 148, 243, 1)",
        },
        {},
        {},
        {},
    ]);

    // logic passenger
    // const validateAdult = (value) => value > 7;
    // const validateChild = (value) => value > 6;
    // const validateInfant = (value) => value > adult;

    // const handleInputChange = (setter, validator) => (event) => {
    //     const value = parseInt(event.target.innerText, 10);
    //     setter(value);
    //     if (validator(value)) {
    //         return <BlockLimitPassengers value />;
    //     } else {
    //         return "";
    //     }
    // };

    // visibleCalendar first
    const [visibleCalendar, setVisibleCalendar] = useState(false);
    // visibleCalendar second
    const [isVisibleCalendarSecond, setIsVisibleCalendarSecond] =
        useState(false);

    // handle change color when click chose seat class
    const [activeStyle, setActiveStyle] = useState(null);

    //set date
    const [valueDate, setValueDate] = useState(() => new Date());
    const [valueDateReturn, setValueDateReturn] = useState(() => new Date());

    // const stringDate = valueDate.toString();
    const options = {
        month: "short",
        day: "numeric",
        year: "numeric",
    };

    const dateString = valueDate.toLocaleDateString("en-VN", options);
    const dateReturnString = valueDateReturn.toLocaleDateString(
        "en-VN",
        options
    );

    useEffect(() => {
        setValueDate(valueDate);
        setVisibleCalendar(false);
    }, [valueDate]);

    useEffect(() => {
        setValueDateReturn((prev) => prev);
        setIsVisibleCalendarSecond(false);
    }, [valueDateReturn]);

    console.log("outside");

    // const handleChangeDate = (e) => {
    //     setValueDate(e);
    // };

    // change color border and color in seat class
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

    // handle in booking seat of adult
    const validate = adult === 7 || child === 6;

    // handle logic show condition passengers
    const handleMoreSeat = () => {
        if (validate) {
            setNotice(true);
            setTimeout(() => {
                setNotice(false);
            }, 2000);
            return "";
        }

        setAdult((prev) => prev + 1);
    };

    const handleMinusSeat = () => {
        if (adult === 1) {
            return "";
        }
        setAdult((prev) => prev - 1);
    };

    // handle in booking seat of child
    const handleMoreSeatChild = () => {
        if (validate) {
            setNoticeChild(true);
            setTimeout(() => {
                setNoticeChild(false);
            }, 2000);
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
    const validateFourInfant = adult === 7 && infant === 4;
    const validateOneInfant = adult === 1 && infant === 1;
    const handleMoreSeatInfant = () => {
        if (validateFourInfant || validateOneInfant) {
            setNoticeInfant(true);
            setTimeout(() => {
                setNoticeInfant(false);
            }, 2000);
            return "";
        }
        // else if (validateOneInfant) {
        //     setNoticeInfant(true);
        //     setTimeout(() => {
        //         setNoticeInfant(false);
        //     }, 2000);
        //     return "";
        // }
        setInfant((prev) => prev + 1);
    };

    const handleMinusSeatInfant = () => {
        if (infant === 0) {
            return "";
        }
        setInfant((prev) => prev - 1);
    };

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

    // handle click iem
    const handleChangeText = (e) => {
        console.log(e.target);
        setSeatClass(e.target.innerText);
        setRenderSeatBlock(false);
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
                    // value={stringDate}
                    value={valueDate}
                    // if we try to setSate in onChange we will get the error bad code
                    onChange={setValueDate}
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

    const renderCalendarReturn = () => {
        return (
            <Group className={cx("group")}>
                <DatePicker
                    className={cx("test-calendar")}
                    numberOfColumns={2}
                    size="lg"
                    // defaultDate={new Date()}
                    minDate={new Date()}
                    // value={stringDate}
                    // value={valueDate}
                    // if we try to setSate in onChange we will get the error bad code
                    onChange={setValueDateReturn}
                    style={{
                        color: "blue",
                        position: "absolute",
                        top: 48,
                        left: -30,
                        // right: 0,
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
                                onClick={() => handleChangeColor(1)}
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
                            <img
                                onClick={handleMinusSeat}
                                src="./images/NavIcon/distract.svg"
                                alt="distract"
                            />

                            <div className={cx("number")}>{adult}</div>
                            <div>
                                <Tippy
                                    arrow
                                    offset={[-127, 112]}
                                    delay={[500, 0]}
                                    placement="top"
                                    visible={notice}
                                    interactive
                                    animation={{ duration: [3000, 2000] }}
                                    render={notice && blockLimitPassengers}
                                >
                                    <img
                                        onClick={handleMoreSeat}
                                        src="./images/NavIcon/plusIcon.svg"
                                        alt="distract"
                                    />
                                </Tippy>
                            </div>
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
                            <div>
                                <Tippy
                                    arrow
                                    offset={[-127, 173]}
                                    delay={[500, 0]}
                                    placement="top"
                                    visible={noticeChild}
                                    interactive
                                    animation={{ duration: [3000, 2000] }}
                                    render={noticeChild && blockLimitPassengers}
                                >
                                    <img
                                        // onClick={handleMoreSeatChild}
                                        onClick={handleMoreSeatChild}
                                        src="./images/NavIcon/plusIcon.svg"
                                        alt="distract"
                                    />
                                </Tippy>
                            </div>
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
                            <div>
                                <Tippy
                                    arrow
                                    offset={[-127, 234]}
                                    delay={[500, 0]}
                                    placement="top"
                                    visible={noticeInfant}
                                    interactive
                                    animation={{ duration: [3000, 2000] }}
                                    render={
                                        noticeInfant && blockLimitPassengers
                                    }
                                >
                                    <img
                                        onClick={handleMoreSeatInfant}
                                        src="./images/NavIcon/plusIcon.svg"
                                        alt="distract"
                                    />
                                </Tippy>
                            </div>
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
            <div
                className={cx("container__flight")}
                style={{ width: oneWay ? "" : "1000px" }}
            >
                <div className={cx("container__flight-info")}>
                    <div className={cx("choice-block")}>
                        <div className={cx("destination")}>
                            <label
                                className={cx("container-radio")}
                                htmlFor="labelRadio-first"
                                onClick={() => setOneWay(true)}
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
                                {/* {console.log(checkHeight)} */}
                            </label>
                        </div>
                        <div className={cx("destination")}>
                            <label
                                id={"two"}
                                className={cx("container-radio")}
                                htmlFor="labelRadio-second"
                                onClick={() => setOneWay(false)}
                            >
                                <input
                                    className={cx("radio__input")}
                                    type="radio"
                                    name="radioName"
                                    id="labelRadio-second"
                                    // checked={wayCheckedSecond}
                                />
                                <dir className={cx("radio__radio")}></dir>
                                <h4>Multi-city</h4>
                            </label>
                        </div>
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
                {oneWay ? (
                    <Fragment>
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
                                                className={cx(
                                                    "passenger__seat"
                                                )}
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
                                                {adult} Adult, {child} Child,{" "}
                                                {infant} Infant
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
                                        render={
                                            visibleCalendar && renderCalendar
                                        }
                                        onClickOutside={() =>
                                            setVisibleCalendar(false)
                                        }
                                    >
                                        <div
                                            className={cx("calendar")}
                                            onClick={() =>
                                                setVisibleCalendar(
                                                    (show) => !show
                                                )
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

                                            {/* i was change to clean */}
                                            {dateString}
                                        </div>
                                    </Tippy>
                                </dir>

                                <dir className={cx("info-date")}>
                                    <label
                                        htmlFor="date"
                                        className={cx(check ? "checkbox" : "")}
                                        // onClick={handleAddClass}
                                    >
                                        <input
                                            type="checkbox"
                                            name="date"
                                            id="date"
                                            // checked={check}
                                            defaultChecked={!check}
                                            // onClick={handleAddClass}
                                            onChange={() =>
                                                setCheck((show) => !show)
                                            }
                                        />
                                        Return Date
                                    </label>
                                    <Tippy
                                        visible={
                                            check === true
                                                ? !isVisibleCalendarSecond
                                                : isVisibleCalendarSecond
                                        }
                                        render={
                                            check !== true &&
                                            isVisibleCalendarSecond &&
                                            renderCalendarReturn
                                        }
                                        interactive
                                        offset={[-60, 0]}
                                        onClickOutside={() =>
                                            setIsVisibleCalendarSecond(false)
                                        }
                                    >
                                        <div
                                            className={cx(
                                                "calendar",
                                                check ? "testClass" : ""
                                            )}
                                            onClick={() =>
                                                setIsVisibleCalendarSecond(
                                                    (show) => !show
                                                )
                                            }
                                            style={{
                                                border: isVisibleCalendarSecond
                                                    ? "2px solid rgb(1, 148, 243)"
                                                    : "1px solid rgba(206, 208, 209, 1)",
                                                transition: "border 300ms",
                                            }}
                                        >
                                            <CalendarIcon
                                                className={cx("icon-calendar")}
                                            />
                                            {dateReturnString}
                                        </div>
                                    </Tippy>
                                    {/* <RenderReturnDate /> */}
                                </dir>
                            </dir>

                            <div className={cx("seats-block")}>
                                <div className={cx("info-seats")}>
                                    <h4>Seat class</h4>
                                    <Tippy
                                        interactive
                                        visible={renderSeatBlock}
                                        render={
                                            renderSeatBlock && blockSeatClass
                                        }
                                        placement="bottom"
                                        offset={[0, 5]}
                                        onClickOutside={() =>
                                            setRenderSeatBlock(false)
                                        }
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
                                                setRenderSeatBlock(
                                                    (prev) => !prev
                                                )
                                            }
                                        >
                                            <img
                                                alt="seat-icon"
                                                src="./images/NavIcon/seat-icon.svg"
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
                        <div className={cx("btn__search")}>
                            <Router>
                                <Link to="https://www.traveloka.com/en-vn/flight/fullsearch?ap=SGN.BMV&dt=25-04-2023.NA&ps=1.0.0&sc=ECONOMY">
                                    <button className={cx("btn__search-item")}>
                                        <SearchIcon
                                            className={cx("search-icon")}
                                        />
                                        Search Flights
                                    </button>
                                </Link>
                            </Router>
                        </div>
                    </Fragment>
                ) : (
                    <MultiCities />
                )}
            </div>
        </div>
    );
}

export default FlightsItem;

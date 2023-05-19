import Tippy from "@tippyjs/react";
import { clsx, Group } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
    CalendarIcon,
    ArrowSeatIcon,
    SearchIcon,
} from "../../../../../../../images/icon";
import Wrapper from "../../../../../../Wrapper/Wrapper";
import { useEffect, useState, useRef, Fragment } from "react";

import styles from "./MultiCities.module.scss";
import classNames from "classnames/bind";
// import FlightsItem from "../Flights";

const cx = classNames.bind(styles);

function MultiCities({ props }) {
    // set passengers notice
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(0);
    const [infant, setInfant] = useState(0);
    const [notice, setNotice] = useState(false);
    const [noticeChild, setNoticeChild] = useState(false);
    const [noticeInfant, setNoticeInfant] = useState(false);

    // set check
    const [check, setCheck] = useState(false);

    // info way first block
    const [departureWay, setDepartureWay] = useState("TP HCM (SGN)");
    const [returnWay, setReturnWay] = useState("Buôn Ma Thuột (BMV)");

    // info wat second block

    // passengers notice
    const [done, setDone] = useState(false);
    // seat class notice
    const [renderSeatBlock, setRenderSeatBlock] = useState(false);
    const [seatClass, setSeatClass] = useState("Economy");

    const [isActiveClass, setIsActiveClass] = useState(false);

    const [changeColor, setChangeColor] = useState([
        {
            backgroundColor: "rgba(1, 148, 243, 1)",
            color: "rgba(1, 148, 243, 1)",
        },
        {},
        {},
        {},
    ]);

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

    // add more block info-way

    const [divs, setDivs] = useState([]);

    // shown add flights
    const [isShownFlights, setIsShownFlights] = useState(false);

    // show icon remove flight
    const [isRemoveFlights, setIsRemoveFlights] = useState(true);

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
        // return valueDate;
        setValueDate(valueDate);
        setVisibleCalendar(false);
    }, [valueDate]);

    useEffect(() => {
        setValueDateReturn((prev) => prev);
        setIsVisibleCalendarSecond(false);
    }, [valueDateReturn]);

    console.log("outside");

    // change color border and color in seat class
    const handleChangeColor = (index) => {
        const newStyle = changeColor.map((item, i) => {
            if (i === index) {
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
    // const handleChangeDepartureWay = (e) => {
    //     setDepartureWay(e.target.value);
    // };

    // const handleChangeReturnWay = (e) => {
    //     setReturnWay(e.target.value);
    // };

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
        // e.target.style.transition = "all ease 30ms";
    };

    //renderCalendar

    const renderCalendar = () => {
        return (
            <Group className={cx("group")} style={{ overflow: "hidden" }}>
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
                        left: -134,
                        // borderRadius: "20px",
                        overflow: "hidden",
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
                        left: -132,
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
                                    // animation={{ duration: [3000, 2000] }}
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

    const TestAddBlock = (key) => {
        return (
            <div className={cx("container__info-way")} key={key}>
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
                                placeholder="Origin"
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
                                placeholder="Destination"
                                // onChange={handleChangeReturnWay}
                                onChange={(e) => setReturnWay(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* multi-city block */}
                <div className={cx("container__block-info-date")}>
                    <dir className={cx("info-date")}>
                        <h4>Departure Date</h4>
                        <Tippy
                            visible={isVisibleCalendarSecond}
                            render={
                                // check !== true &&
                                isVisibleCalendarSecond && renderCalendarReturn
                            }
                            interactive
                            offset={[-162, -4]}
                            onClickOutside={() =>
                                setIsVisibleCalendarSecond(false)
                            }
                        >
                            <div
                                className={cx("calendar")}
                                onClick={() =>
                                    setIsVisibleCalendarSecond((show) => !show)
                                }
                                style={{
                                    border: isVisibleCalendarSecond
                                        ? "2px solid rgb(1, 148, 243)"
                                        : "1px solid rgba(206, 208, 209, 1)",
                                    transition: "border 300ms",
                                }}
                            >
                                <CalendarIcon className={cx("icon-calendar")} />
                                {dateReturnString}
                            </div>
                        </Tippy>
                        {/* <RenderReturnDate /> */}
                    </dir>
                </div>
                <img
                    // style={{ display: isRemoveFlights ? "none" : "" }}
                    onClick={handleRemoveFlights}
                    className={cx("close__flights-icon")}
                    src="./images/NavIcon/close-icon.svg"
                    alt="close icon"
                />
            </div>
        );
    };

    const handleAddMoreFlights = (e) => {
        setDivs((prev) => [...prev, <TestAddBlock key={divs.length} />]);
        console.log(divs.length);

        if (divs.length === 0) {
            setIsRemoveFlights(false);
        }

        if (divs.length === 2) {
            setIsShownFlights(true);
        }
    };

    const handleRemoveFlights = (index) => {
        setDivs((prev) => {
            const newDivs = [...prev];
            newDivs.splice(index, 1);
            return newDivs;
        });

        if (divs.length === 0 || divs.length === 1) {
            setIsRemoveFlights(true);
        }

        if (divs.length !== 2) {
            setIsShownFlights(false);
        }

        console.log(divs);
        console.log(divs.length);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container__flight")}>
                <div className="add__info-way-block">
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

                        {/* multi-city block */}
                        <div
                            className={cx("container__block-info-date")}
                            // style={{ width: "39%" }}
                        >
                            <dir className={cx("info-date")}>
                                <h4>Departure Date</h4>
                                <Tippy
                                    interactive
                                    placement="left-end"
                                    offset={[8, 0]}
                                    visible={visibleCalendar}
                                    render={visibleCalendar && renderCalendar}
                                    onClickOutside={() =>
                                        setVisibleCalendar(false)
                                    }
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

                                        {/* i was change to clean */}
                                        {dateString}
                                    </div>
                                </Tippy>
                            </dir>
                        </div>
                        <img
                            onClick={handleRemoveFlights}
                            style={{ display: isRemoveFlights ? "none" : "" }}
                            className={cx("close__flights-icon")}
                            src="./images/NavIcon/close-icon.svg"
                            alt="close icon"
                        />
                    </div>

                    {/* the second info-way-block */}

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
                                        placeholder="Origin"
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
                                        placeholder="Destination"
                                        // onChange={handleChangeReturnWay}
                                        onChange={(e) =>
                                            setReturnWay(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                        </div>

                        {/* multi-city block */}
                        <div className={cx("container__block-info-date")}>
                            <dir className={cx("info-date")}>
                                <h4>Departure Date</h4>
                                <Tippy
                                    visible={isVisibleCalendarSecond}
                                    render={
                                        // check !== true &&
                                        isVisibleCalendarSecond &&
                                        renderCalendarReturn
                                    }
                                    interactive
                                    offset={[-162, -4]}
                                    onClickOutside={() =>
                                        setIsVisibleCalendarSecond(false)
                                    }
                                >
                                    <div
                                        className={cx("calendar")}
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
                        </div>
                        <img
                            style={{ display: isRemoveFlights ? "none" : "" }}
                            onClick={handleRemoveFlights}
                            className={cx("close__flights-icon")}
                            src="./images/NavIcon/close-icon.svg"
                            alt="close icon"
                        />
                    </div>
                    {/* {<TestAddBlock />} */}

                    {divs.map((div, index) => div)}
                </div>

                <div
                    className={cx("container__add-flights")}
                    onClick={handleAddMoreFlights}
                    style={{ display: isShownFlights ? "none" : "flex" }}
                >
                    <img
                        alt="add-flights"
                        src="./images/NavIcon/add-flights.svg"
                    />
                    <h4>ADD ANOTHER FLIGHT</h4>
                </div>

                {/* passengers and seat class block multi-city */}
                <div className={cx("container__booking-block")}>
                    <Tippy
                        interactive
                        placement="bottom"
                        offset={[-25, 8]}
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

                    {/* seat class block multi-city */}

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
                                        alt="seat-icon"
                                        src="./images/NavIcon/seat-icon.svg"
                                    />
                                    <h4>{seatClass}</h4>
                                    <ArrowSeatIcon />
                                </div>
                            </Tippy>
                        </div>
                    </div>
                </div>
                {/* date calendar */}
                {/*  */}

                {/* find more information */}
                <div className={cx("more__info-block")}>
                    <span>
                        What are Multi-city Flights?
                        <Router>
                            <Link to="https://www.traveloka.com/en-vn/flight/multi-city">
                                Find out here
                            </Link>
                        </Router>
                    </span>
                </div>

                <div className={cx("btn__search")}>
                    <Router>
                        <Link to="https://www.traveloka.com/en-vn/flight/fullsearch?ap=SGN.BMV&dt=25-04-2023.NA&ps=1.0.0&sc=ECONOMY">
                            <button className={cx("btn__search-item")}>
                                <SearchIcon className={cx("search-icon")} />
                                Search Flights
                            </button>
                        </Link>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default MultiCities;

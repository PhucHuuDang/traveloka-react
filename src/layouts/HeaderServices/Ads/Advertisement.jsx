import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./Advertisement.module.scss";

const cx = classNames.bind(styles);

function Advertisement() {
    const children = document.getElementsByTagName("a");
    // console.log(children);

    const handlePrev = (e) => {
        console.log(e.target);
    };

    const handleNext = (e) => {
        console.log(e.target);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("container__block-items")}>
                    <Router>
                        <div className={cx("container-img")}>
                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/dulichtrongoi2023"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/03/13/1678681151477-20463c6dfd57b50e9f607111870d294c.jpeg?tr=dpr-2,h-230,q-75,w-472"
                                    alt="ads first"
                                />
                            </Link>

                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/epic-bay"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/04/05/1680689363088-db53706d3b9766dd61e4e9858933dde5.png?tr=dpr-2,h-230,q-75,w-472"
                                    alt="ads second"
                                />
                            </Link>

                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/epic-hotel"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/04/05/1680663676925-6e2f8d479425b78d8fa9d7c32ccfdc9b.jpeg?tr=dpr-2,h-230,q-75,w-472"
                                    alt="ads third"
                                />
                            </Link>

                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/epic-vuichoi"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/04/05/1680671198534-cb3b5ef3f3d764910076727cec9eb83d.png?tr=dpr-2,h-230,q-75,w-472"
                                    alt="ads forth"
                                />
                            </Link>

                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/vuiquocte"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2023/04/06/1680750725689-f57c18846724e106e95968ed8a9ca66b.png?tr=dpr-2,h-230,q-75,w-472"
                                    alt="fifth"
                                />
                            </Link>

                            <Link
                                to="https://www.traveloka.com/en-vn/promotion/vuiquocte"
                                target="_blank"
                            >
                                <img
                                    className={cx("img")}
                                    // src="./images/AdsImg/test-img.png"
                                    src="https://ik.imagekit.io/tvlk/image/imageResource/2022/12/22/1671695795881-fc9f8b5c67e1dab8e8341a72fc1827de.png?tr=dpr-2,h-230,q-75,w-472"
                                    alt="fifth"
                                />
                            </Link>
                        </div>
                    </Router>
                </div>
            </div>

            <div className={cx("details")}>
                <div className={cx("arrow-left")} onClick={handlePrev}>
                    <img
                        src="./images/IconServices/arrow-left.svg"
                        alt="arrow left"
                    />
                </div>
                <Router>
                    <div className={cx("see-more-text")}>
                        <Link
                            to="https://www.traveloka.com/en-vn/promotion"
                            target="_blank"
                        >
                            See more details
                        </Link>
                    </div>
                </Router>

                <div className={cx("arrow-right")} onClick={handleNext}>
                    <img
                        src="./images/IconServices/arrow-right.svg"
                        alt="arrow right"
                    />
                </div>
            </div>
        </div>
    );
}

export default Advertisement;

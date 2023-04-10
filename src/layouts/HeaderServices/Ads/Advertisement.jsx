import classNames from "classnames/bind";
import { BrowserRouter as Router, Link } from "react-router-dom";
import styles from "./Advertisement.module.scss";

const cx = classNames.bind(styles);

function Advertisement() {
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
                        </div>
                    </Router>
                </div>
            </div>
            <div className={cx("see-more-text")}>See more details</div>
        </div>
    );
}

export default Advertisement;

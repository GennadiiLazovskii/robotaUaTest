import { Container } from "react-bootstrap";
// import imgJobLogo from "../../resources/img/Prof-Photo.jpg";
// import vacancyLogo from "../../resources/img/vacancy-Name.png";
import {
    BatFalse,
    BatTrue,
    FavoritesFalse,
    FavoritesTrue,
    Group,
} from "../../resources/btn/Icons";
import "./jobCard.scss";
import "./media_jobCard.scss";

const JobCard = ({
    imgJobLogo,
    status,
    vacancyName,
    vacancyLogo,
    salaryRate,
    salaryDescr,
    addressCompany,
    addressCity,
    benefits1,
    benefits2,
    benefits3,
    time,
}) => {
    return (
        <Container>
            <div className="cardMain">
                <div className="cardMain__wrapper">
                    <div className="cardMain__logo">
                        <img src={imgJobLogo} alt="Job Logo" />
                    </div>
                    <div className="cardMain__description">
                        <div className="cardMain__status">
                            <span>{status}</span>
                        </div>
                        <div className="cardMain__vacancy">
                            <div className="cardMain__vacancy-name">
                                {vacancyName}
                            </div>
                            <div className="cardMain__vacancy-logo">
                                <img src={vacancyLogo} alt="vacancy logo" />
                            </div>
                        </div>
                        <div className="cardMain__salary">
                            <div className="cardMain__salary-rate">{salaryRate}</div>
                            <div className="cardMain__salary-descr">
                            {salaryDescr}
                            </div>
                        </div>
                        <div className="cardMain__address">
                            <div className="cardMain__address-company">{addressCompany}</div>
                            <div className="cardMain__address-city">{addressCity}</div>
                        </div>
                        <div className="cardMain__badges">
                            <div className="cardMain__badges-item">
                                <span>{benefits1}</span>
                            </div>
                            <div className="cardMain__badges-item">
                                <span>{benefits2}</span>
                            </div>
                            <div className="cardMain__badges-item">
                                <span>{benefits3}</span>
                            </div>
                        </div>
                    </div>
                    <div className="cardMain__footer">
                        <div className="cardMain__footer-btn">
                            <div className="cardMain__footer-response">
                                <button className="cardMain__footer-people">
                                    <img src={Group} alt="Group Btn" />
                                    Откликнуться
                                </button>
                                <button className="cardMain__footer-favorites">
                                    <img src={FavoritesFalse} alt="Favorites Btn" />
                                </button>
                                <button className="cardMain__footer-bad">
                                    <img src={BatFalse} alt="Bat Btn" />
                                </button>
                            </div>
                            <div></div>
                            <div className="cardMain__footer-time">{time}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default JobCard;

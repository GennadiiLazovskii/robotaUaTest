import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
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
    statusText,
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

    const [batBtn, setBatBtn] = useState(false);
    const [favorites, setFavorites] = useState(false);

    const Status = () => {

            if(!batBtn) {
                return <span className="cardMain__status-new">{statusText}</span>
            } else {
                return <span style={{color: '#303A3E', width: '118px', background: '#C8D1D6'}} className="cardMain__status-new">Неинтересная</span>
            }
    }

    return (
        <Container>
            <div style={batBtn ? {opacity: ".5"} : {opacity: "1"}} className="cardMain">
                <div className="cardMain__wrapper">
                    <div className="cardMain__logo">
                        <img src={imgJobLogo} alt="Job Logo" />
                    </div>
                    <div className="cardMain__description">
                        <div className="cardMain__status">
                            <Status/>
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
                                <button onClick={() => setFavorites(!favorites)} className="cardMain__footer-favorites">
                                    <img src={favorites ? FavoritesTrue : FavoritesFalse} alt="Favorites Btn" />
                                </button>
                                <button onClick={() => setBatBtn(!batBtn)} className="cardMain__footer-bad">
                                    <img src={batBtn ? BatTrue : BatFalse} alt="Bat Btn" />
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

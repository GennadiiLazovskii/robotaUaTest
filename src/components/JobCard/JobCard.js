import { Container } from 'react-bootstrap';
import imgJobLogo from '../../resources/img/Prof-Photo.jpg';
import vacancyLogo from '../../resources/img/vacancy-Name.png';
import { BatFalse, BatTrue, FavoritesFalse, FavoritesTrue, Group } from '../../resources/btn/Icons';
import './jobCard.scss';
import './media_jobCard.scss';

const JobCard = () => {

    return (
        <Container>
            <div className="cardMain">
                <div className="cardMain__wrapper">
                    <div className="cardMain__logo">
                        <img src={imgJobLogo} alt="Job Logo" />
                    </div>
                    <div className="cardMain__description">
                        <div className="cardMain__status">
                            <span>Новая</span>
                        </div>
                        <div className="cardMain__vacancy">
                            <div className="cardMain__vacancy-name">Продавец-консультант (ТРЦ Дарынок, ТРЦ Рив Гош, ТРЦ Нью Вей, м. Дарница)</div>
                            <div className="cardMain__vacancy-logo">
                                <img src={vacancyLogo} alt="vacancy logo" />
                            </div>
                        </div>
                        <div className="cardMain__salary">
                            <div className="cardMain__salary-rate">10 000  — 15 000 ₴</div>
                            <div className="cardMain__salary-descr">Ставка + процент от продаж</div>
                        </div>
                        <div className="cardMain__address">
                            <div className="cardMain__address-company">FISHKI.UA</div>
                            <div className="cardMain__address-city">Киев</div>
                        </div>
                        <div className="cardMain__badges">
                            <div className="cardMain__badges-item">
                                <span>Обеды в офис</span>
                            </div>
                            <div className="cardMain__badges-item">
                                <span>Гибкий график</span>
                            </div>
                            <div className="cardMain__badges-item">
                                <span>Компенсация учебы</span>
                            </div>
                        </div>
                    </div>
                    <div className="cardMain__footer">
                    <div className="cardMain__footer-btn">
                        <div className="cardMain__footer-response">
                            <button className='cardMain__footer-people'>
                                <img src={Group} alt="Group Btn" />
                                Откликнуться
                            </button>
                            <button className='cardMain__footer-favorites'>
                                <img src={FavoritesFalse} alt="Favorites Btn" />
                            </button>
                            <button className='cardMain__footer-bad'>
                                <img src={BatFalse} alt="Bat Btn" />
                            </button>
                        </div>
                        <div></div>
                        <div className="cardMain__footer-time">37 минут назад</div>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default JobCard;
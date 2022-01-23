import logo from '../../resources/img/logo-white.svg';
import './appHeader.scss';

const AppHeader = () => {

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="logo" />
            </div>
        </header>
    );
}

export default AppHeader;
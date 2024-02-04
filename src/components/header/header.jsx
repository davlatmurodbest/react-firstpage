import './header.scss'
import cofelogo from '../img/cofelogo.png'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <a href="#link" className="logo__link">
                        <img src={cofelogo} alt="logo" className="header__logo" width='236' height="26" />
                    </a>

                    <nav className='header__nav'>
                        <li className="header__item">
                            <a href="#link" className="header__link">home</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__link">about us</a>
                        </li>
                        <li className="header__item">
                            <a href="#link" className="header__link">create your plan</a>
                        </li>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;
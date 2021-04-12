import style from './Header.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import imgTime from '../../assets/img/time.svg'
import imgPhone from '../../assets/img/phone.svg'



const Header = () => {

    return (
        <>
            <header className={style.header}>
                <div className='container'>
                    <div className={style.body}>
                        <Link to="/" className={style.logo}>
                            <img src={logo} alt="logo" />
                        </Link>

                        <div className={style.delivery}>
                            <img src={imgTime} alt="icon time" />
                            30 минут доставка
                        </div>
                        <div className={style.phone}>
                            <img src={imgPhone} alt="icon phone" />
                            <a href="tel:7654">7654</a>
                        </div>

                    </div>
                </div>
            </header>

            <div className={style.menu}>
                <div className="container">
                    <nav className={style.nav}>
                        <ul className={style.list}>
                            <li>
                                <NavLink to='/' exact className={style.link} activeClassName={style.activeLink}>
                                    Пицца
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/drinks' className={style.link} activeClassName={style.activeLink}>
                                    Напитки
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/sauce' className={style.link} activeClassName={style.activeLink}>Соусы</NavLink>
                            </li>
                        </ul>
                        <Cart />
                    </nav>
                </div>
            </div>
        </>
    )
}


export default Header;
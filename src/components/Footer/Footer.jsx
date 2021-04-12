import style from './Footer.module.css'
import icon1 from '../../assets/img/icon1.png'
import icon2 from '../../assets/img/icon2.png'
import icon3 from '../../assets/img/icon3.png'
import icon4 from '../../assets/img/icon4.png'
import icon5 from '../../assets/img/icon5.png'




const Footer = () => {
    return (
        <footer className={style.footer}>
            <div className="container">
                <div className={style.row}>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src={icon1} alt="" />
                        </div>
                        <div className={style.title}>
                            270 000
                        </div>
                        <div className={style.subtitle}>
                            Клиентов в месяц
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src={icon2} alt="" />
                        </div>
                        <div className={style.title}>
                            31
                        </div>
                        <div className={style.subtitle}>
                            Пиццерия в стране
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src={icon3} alt="" />
                        </div>
                        <div className={style.title}>
                            90
                        </div>
                        <div className={style.subtitle}>
                            Стран
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src={icon4} alt="" />
                        </div>
                        <div className={style.title}>
                            24/7
                        </div>
                        <div className={style.subtitle}>
                            Доставляем
                        </div>
                    </div>
                    <div className={style.item}>
                        <div className={style.img}>
                            <img src={icon5} alt="" />
                        </div>
                        <div className={style.title}>
                            11:00-23:00
                        </div>
                        <div className={style.subtitle}>
                            Время работы пиццерий
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
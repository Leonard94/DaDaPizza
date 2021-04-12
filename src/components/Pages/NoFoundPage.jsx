import emptyBox from '../../assets/img/emptyBox.png'
import { Link } from 'react-router-dom'
import style from './NoPageFound.module.css'

const NoFoundPage = () => {
    return (
        <div className="content">
            <div className="container">
                <div className={style.nopage}>
                    <div className={style.img}>
                        <img src={emptyBox} className={style.img} alt="" />
                    </div>
                    <div className={style.title}>
                        Страница не найдена, либо ещё не создана
                    </div>
                    <button className={style.btn}>
                        <Link to={'/'}> Перейти в меню </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default NoFoundPage;
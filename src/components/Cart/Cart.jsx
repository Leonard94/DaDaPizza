import style from './Cart.module.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {

    const { totalPrice, totalCount } = useSelector(({ cartPage }) => cartPage)



    if (totalCount !== 0) {
        return (
            <button className={style.button}>
                <Link className={style.link} to='/cart'>
                    <span className={style.cart}>{Math.floor(totalPrice * 100) / 100} BYN</span>
                    <span className={style.items}>{totalCount}</span>
                </Link>
            </button>
        )
    }


    return (
        <>
            <button className={style.button}>
                <Link className={style.link} to='/cart'>
                    <span className={style.cart}>Корзина</span>
                </Link>
            </button>
        </>
    )
}



export default Cart;
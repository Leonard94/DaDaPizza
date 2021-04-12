import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'
import boxImg from '../../assets/img/box.png'
import { removeItem, minusItem, plusItem } from '../../redux/reducers/cartReducer'
import style from './CartPage.module.css'

const CartPage = () => {

    const { items, totalPrice, totalCount } = useSelector(({ cartPage }) => cartPage)

    const addedItems = Object.keys(items).map(key => {
        return items[key].items[0]
    })

    const dispatch = useDispatch()

    // const onClearCart = () => {
    //     if (window.confirm('Вы действительно хотите очистить корзину?')) {
    //         dispatch(clearCart())
    //     }
    // }

    const onRemoveItem = (id) => {
        // if (window.confirm('Вы действительно хотите удалить?')) {
        // }
        dispatch(removeItem(id))
    }

    const onMinusItem = (id) => {
        dispatch(minusItem(id))
    }

    const onPlusItem = (id) => {
        dispatch(plusItem(id))
    }


    return (
        <div className={style.cart}>
            <div className={style.container}>
                {totalCount ? <>
                    <div className={style.title}>
                        Корзина
                    </div>
                    {/* <button onClick={onClearCart}> Очистить корзину </button> */}
                    {
                        addedItems.map((obj) => (
                            <CartItem
                                key={obj.id}
                                name={obj.name}
                                title={obj.title}
                                size={obj.size}
                                id={obj.id}
                                totalPrice={items[obj.id].totalPrice}
                                totalCount={items[obj.id].items.length}
                                onRemoveItem={onRemoveItem}
                                onMinusItem={onMinusItem}
                                onPlusItem={onPlusItem}
                            />
                        ))
                    }
                    <div className={style.price}>
                        Сумма заказа:<span>{Math.floor(totalPrice * 100) / 100} руб.</span>
                    </div>
                    <div className={style.row}>
                        <button>
                            <Link to={'/'} className={style.button__prev}>Вернуться в меню</Link>
                        </button>
                        <button>
                            <Link to={'/'} className={style.button__next}>Оформить заказ</Link>
                        </button>
                    </div>
                </> :
                    <div className={style.column}>
                        <div className={style.title}>
                            Корзина пуста
                        </div>
                        <div className={style.body}>
                            <div className={style.text}>
                                Добавьте что-нибудь из меню
                            </div>
                            <div className={style.box}>
                                <img src={boxImg} alt="" />
                            </div>
                        </div>
                        <button className={style.button__menu}>
                            <Link to={'/'} >Вернуться в меню</Link>
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default CartPage;
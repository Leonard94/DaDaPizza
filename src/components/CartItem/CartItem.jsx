import style from './CartItem.module.css'


const CartItem = ({ id, name, title, size, totalPrice, totalCount, onRemoveItem, onMinusItem, onPlusItem }) => {

    const remove = () => {
        onRemoveItem(id)
    }

    const minus = () => {
        onMinusItem(id)
    }

    const plus = () => {
        onPlusItem(id)
    }

    return (
        <div className={style.item}>
            <div className={style.left__side}>
                <div className={style.img}>
                    <img src={`http://leonardtest.ru/pizza/img/${name}.png`} alt={name} />
                </div>
                <div>
                    <div className={style.title}>
                        {title}
                    </div>
                    <div className={style.subtitle}>
                        {size}
                    </div>
                </div>
            </div>
            <div className={style.right__side}>
                <div className={style.counter}>
                    <span onClick={minus} className={style.minus}>—</span>
                    <span className={style.count}>{totalCount}</span>
                    <span onClick={plus} className={style.plus}>+</span>
                </div>
                <div className={style.price}>
                    <p> {Math.floor(totalPrice * 100) / 100} руб. </p>
                    <button onClick={remove} className={style.btn}></button>
                </div>
            </div>

        </div>
    );
};

export default CartItem;
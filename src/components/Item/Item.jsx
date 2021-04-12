import { useState } from 'react'
import style from './Item.module.css'


const Item = ({ name, title, composition, types, id, addItem }) => {

    const [activeSize, setActiveSize] = useState(0)

    const onSelectSize = (index) => {
        setActiveSize(index)
    }

    const onAddPizza = () => {
        const obj = {
            id,
            name,
            title,
            price: types[activeSize].price,
            size: types[activeSize].size,
        }
        addItem(obj)
    }

    return (
        <div className={style.body}>
            <div className={style.img}>
                <img src={`http://leonardtest.ru/pizza/img/${name}.png`} alt={name} />
            </div>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.composition}>
                {composition}
            </div>
            <ul className={style.size}>
                {types.map((type, index) => (
                    <li key={index} onClick={() => onSelectSize(index)} className={activeSize === index ? style.active : ''}> {type.size} </li>
                ))}
            </ul>
            <div className={style.row}>
                <div className={style.price}>
                    {types[activeSize].price} руб.
                </div>
                <button className={style.button} onClick={onAddPizza}>В корзину</button>
            </div>
        </div >
    )
}

export default Item;
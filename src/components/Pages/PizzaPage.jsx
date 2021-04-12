import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { getPizzasThunkCreator } from '../../redux/reducers/pizzaReducer'
import { useEffect } from 'react'
import Preloader from '../Preloader/Preloader'

const PizzaPage = (props) => {

    const dispatch = useDispatch()

    const pizzas = useSelector((state) => state.pizzaPage.pizza)
    const isLoaded = useSelector((state) => state.pizzaPage.isLoaded)


    useEffect(() => {
        dispatch(getPizzasThunkCreator());
    }, [])

    return (
        <>
            <div className='content'>
                <div className='container'>
                    <div className='items__title'>
                        Пицца
                    </div>
                    <div className='items__row'>
                        {isLoaded
                            ? pizzas.map((pizza) => {
                                return <Item {...pizza} addItem={props.addItem} key={pizza.id} />
                            })
                            : <Preloader />
                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default PizzaPage;
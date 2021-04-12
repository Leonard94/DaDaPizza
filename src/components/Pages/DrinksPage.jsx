import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { getDrinksThunkCreator } from '../../redux/reducers/drinksReducer'
import { useEffect } from "react";
import Preloader from '../Preloader/Preloader'

const DrinksPage = (props) => {

    const dispatch = useDispatch()

    const drinks = useSelector((state) => state.drinksPage.drinks)
    const isLoaded = useSelector((state) => state.drinksPage.isLoaded)


    useEffect(() => {
        dispatch(getDrinksThunkCreator());
    }, [])


    return (
        <>
            <div className='content'>
                <div className='container'>
                    <div className='items__title'>
                        Напитки
                    </div>
                    <div className='items__row'>
                        {isLoaded
                            ? drinks.map((drink) => {
                                return <Item {...drink} addItem={props.addItem} key={drink.id} />
                            })
                            : <Preloader />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default DrinksPage;
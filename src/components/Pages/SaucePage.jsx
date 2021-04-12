import Item from '../Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getSauceThunkCreator } from '../../redux/reducers/sauceReducer'
import Preloader from '../Preloader/Preloader'


const Sauce = (props) => {

    const dispatch = useDispatch()

    // const sauce = useSelector((state) => state.saucePage.sauce).map((sauce) => {
    //     return <Item {...sauce} addItem={props.addItem} key={sauce.id} />
    // })

    const sauce = useSelector((state) => state.saucePage.sauce)
    const isLoaded = useSelector((state) => state.saucePage.isLoaded)

    useEffect(() => {
        dispatch(getSauceThunkCreator());
    }, [])


    return (
        <>
            <div className='content'>
                <div className='container'>
                    <div className='items__title'>
                        Соусы
                    </div>
                    <div className='items__row'>
                        {isLoaded
                            ? sauce.map((sauce) => <Item {...sauce} addItem={props.addItem} key={sauce.id} />)
                            : <Preloader />
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sauce;
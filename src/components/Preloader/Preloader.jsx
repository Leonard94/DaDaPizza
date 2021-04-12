import preloaderPizza from '../../assets/img/preloaderPizza.svg'
import style from './Preloader.module.css'



const Preloader = () => {

  return (
    <div className='items__row'>
      {
        Array(8).fill(0).map((_, index) =>
        (
          <div className={style.item} key={index}>
            <img src={preloaderPizza} alt="" />
            <span className={style.span}></span>
          </div>
        )
        )
      }
    </div>
  )
}

export default Preloader
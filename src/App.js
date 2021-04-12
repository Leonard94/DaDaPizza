import './App.css';
import Header from './components/Header/Header'
import PizzaPage from './components/Pages/PizzaPage'
import DrinksPage from './components/Pages/DrinksPage'
import NoFoundPage from './components/Pages/NoFoundPage'
import CartPage from './components/Pages/CartPage'
import SaucePage from './components/Pages/SaucePage'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewItem } from './redux/reducers/cartReducer'
import Footer from './components/Footer/Footer';


function App() {

  const dispatch = useDispatch()

  const addItem = (obj) => {
    dispatch(addNewItem(obj))
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact render={() => <PizzaPage addItem={addItem} />} />
        <Route path='/drinks' exact render={() => <DrinksPage addItem={addItem} />} />
        <Route path='/sauce' exact render={() => <SaucePage addItem={addItem} />} />
        <Route path='/cart' component={CartPage} />
        <Route component={NoFoundPage} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

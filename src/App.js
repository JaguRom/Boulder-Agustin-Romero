import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {CartContextProvider} from './Context/CartContext';
import Footer from './Components/Footer/Footer';


function App() {
  return (
      <BrowserRouter>
        <CartContextProvider>
        <NavBar/>
        <Routes>
            <Route path='/' element= {<ItemListContainer greeting="Boulder Mountain Shop"/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer greeting="Boulder Mountain Shop"/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer/>} className="item-detail-container"/>
            <Route path='/cart' element={<Cart info="Products in Cart"/>}/>
          </Routes>
          <Footer/>
        </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;

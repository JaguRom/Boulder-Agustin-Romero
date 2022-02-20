import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
 

function App() {
  return (
      <BrowserRouter>
    <div>
      <NavBar />
      <Routes>
      <Route path='/' element= {<ItemListContainer greeting="Boulder Mountain Shop"/>} />
      <Route path='/category/:categoryId' element= {<ItemListContainer greeting="Boulder Mountain Shop"/>} />
      <Route path='/detail/:productId' element={<ItemDetailContainer/>}/>
{/*       <ItemListContainer greeting="Boulder Mountain Shop"/>
      <ItemDetailContainer/> */}
    </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;

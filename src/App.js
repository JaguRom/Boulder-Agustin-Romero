import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
        <ItemListContainer greeting="Goat Mountain Shop"/>
      </header>
    </div>
  );
}

export default App;

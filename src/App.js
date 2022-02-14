import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <body>
      <NavBar />
      <ItemListContainer greeting="Boulder Mountain Shop"/>
    </body>
  );
}

export default App;

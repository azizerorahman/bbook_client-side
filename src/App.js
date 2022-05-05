import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import StockUpdate from './components/StockUpdate/StockUpdate';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/book/:id' element={<StockUpdate></StockUpdate>}></Route>
      </Routes>
    </div>
  );
}

export default App;
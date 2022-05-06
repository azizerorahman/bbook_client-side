import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import RequireAuth from './components/RequireAuth/RequireAuth';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import StockUpdate from './components/StockUpdate/StockUpdate';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/book/:id' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='/terms-and-conditions' element={<TermsAndConditions></TermsAndConditions>}></Route>
      </Routes>
    </div>
  );
}

export default App;
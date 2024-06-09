import {Routes, Route} from 'react-router-dom'
import { ChooseScreen, Home, Products, StartingScreen } from './_root/pages';
import "./global.css";

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<StartingScreen/>} index/>
      <Route path='/choice' element={<ChooseScreen/>} index/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<Products/>}/>
    </Routes>
  );
};

export default App;

import "./App.css";
import AddToDo from './addtodo'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import CheckBoxSwap from "./checkboxswap";
import Form from "./form";
import ExpenseTracker from "./expensetracker";
import Modal from "./modal";
import RadioButton from "./radiobutton";
import SearchBar from "./search";
import Stepper from "./stepper";
import Timer from "./timer";
import Tictactoe from "./tictactoe";
import Checkboxdelete from "./checkboxdelete";
import AnimationBox from "./animationbox";
import ProgressBar from "./progressbar";
import Rating from "./rating";

function App() {
  return <>
  <BrowserRouter>
  <Routes>
    <Route path="/addtodo" element={<AddToDo/>}/>
    <Route path="/checkboxswap" element={<CheckBoxSwap/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/expensetracker" element={<ExpenseTracker/>}/>
    <Route path="/modal" element={<Modal/>}/>
    <Route path="/radiobutton" element={<RadioButton/>}/>
    <Route path="/search" element={<SearchBar/>}/>
    <Route path="/stepper" element={<Stepper/>}/>
    <Route path="/timer" element={<Timer/>}/>
    <Route path="/tictactoe" element={<Tictactoe/>}/>
    <Route path="/checkboxdelete" element={<Checkboxdelete/>}/>
    <Route path="/animationbox" element={<AnimationBox/>}/>
    <Route path="/progressbar" element={<ProgressBar/>}/>
    <Route path="/rating" element={<Rating/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;

//{rating<i+1?"★":"☆"}

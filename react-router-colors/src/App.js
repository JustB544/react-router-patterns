import './App.css';
import { Routes, Route, Navigate, BrowserRouter, Form} from "react-router-dom";
import colors from "./colors";
import ColorList from './ColorList';
import ColorDetail from './ColorDetail';
import { useState } from 'react';
import NewColorForm from './NewColorForm';

function App() {
  const [_colors, setColors] = useState(colors);

  function newColor({name, color}){
    console.log("heck");
    setColors(c => [...c, {name, color}]);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/colors" element={<ColorList colors={_colors}/>} />
        <Route exact path="/colors/:color" element={<ColorDetail colors={_colors}/>} />
        <Route exact path="/colors/new" element={<NewColorForm newColor={(color, evt) => newColor(color)}/>} />
        <Route path="*" element={<Navigate to="/colors" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

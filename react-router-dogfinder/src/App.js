import './App.css';
import dogs from './db.json'
import { Routes, Route, Navigate, BrowserRouter, useParams } from "react-router-dom";
import DogList from './DogList';
import DogDetail from './DogDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dogs" element={<DogList dogs={dogs.dogs}/>} />
        <Route exact path="/dogs/:name" element={<DogDetail dogs={dogs.dogs}/>} />
        <Route path="*" element={<Navigate to="/dogs" />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

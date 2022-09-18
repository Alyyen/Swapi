import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import AllPeople from './components/AllPeople';
import Searchbar from './components/Searchbar'
import Character from './components/Character';

function App() {
    return (
        <div className="App">
            <Searchbar />
            <Routes>
                <Route exact path="/" element={<AllPeople />} />
                <Route exact path="/people/:id" element={<Character />} />
            </Routes>
        </div>
    );
}

export default App;

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Docs from './components/Docs';
import Tutorials from './components/Tutorials';
import Community from './components/Community';
import Menu from './components/Menu';
import ErrorPage from './components/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Docs/>} />
        <Route path="/tutorial" element={<Tutorials/>} />
        <Route path="/community" element={<Community/>} />
        <Route element={ErrorPage} />
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;

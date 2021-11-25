import './App.css';
import "antd/dist/antd.css";
import './App.css';
// import { BrowserRouter as Switch, Route } from "react-router-dom";
import AppHeader from './components/header';
import StepsClues from './components/steps';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <StepsClues/>
    </div>
  );
}

export default App;

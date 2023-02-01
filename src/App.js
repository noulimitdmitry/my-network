import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Main from "./components/Main/Main"

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app__container">
        <Header />
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div className="app-wrapper">
      <div className="app__container">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Main from "./components/main/Main"
import Footer from "./components/footer/Footer"

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

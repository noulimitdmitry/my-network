import logo from './logo.svg';
import './App.scss';
import Header from "./components/Header/Header"
import Nav from "./components/Nav/Nav"
import Profile from "./components/Profile/Profile"
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Contacts from './components/Contacts/Contacts';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes} from 'react-router-dom';




const App = (props) => {
  return (
    <div className="app-wrapper">
      <div className="app__container">
        <BrowserRouter>
          <Header />
          <Nav />
          <div className='app__content'>
            <Routes>
              <Route exact path='/dialogs' element={<Dialogs state={props.state.dialogsData} />} />
              <Route path='/' element={<Profile state={props.state.profileData} />} />
              <Route path='/news' element={<News />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

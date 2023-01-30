import s from "../css/Header.module.css"
import w from "../css/Wrapper.module.css"

const Header = () => {
  return (
    // <header className="header app__header">
    <header className={`${s.header} ${w.app__header}`}>
      Header
      <img className={`${s.header__img} ${s.logo}`} src="https://st.depositphotos.com/1010751/5000/v/600/depositphotos_50006453-stock-illustration-teamwork-hi-5-lineal-image.jpg"></img>
    </header>
  );
}

export default Header

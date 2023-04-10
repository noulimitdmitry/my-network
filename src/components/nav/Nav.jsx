import s from "./Nav.module.css"
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <div className={s.item}><NavLink className={s.link} to="/" activeClassName={s.active}>Profile</NavLink></div>
        <div className={s.item}><NavLink className={s.link} to="/dialogs" activeClassName={s.active}>Dialogs</NavLink></div>
        <div className={s.item}><NavLink className={s.link} to="/news" activeClassName={s.active}>News</NavLink></div>
        <div className={s.item}><NavLink className={s.link} to="/contacts" activeClassName={s.active}>Contacts</NavLink></div>
        <div className={s.item}><NavLink className={s.link} to="/settings" activeClassName={s.active}>Settings</NavLink></div>
      </ul>
    </nav>
  )
}

export default Nav;




import s from "./Nav.module.css"
import hs from "../Wrapper.module.css"

const Nav = () => {
  return (
    <nav className={`${hs.nav} ${s.nav}`}>
      <ul className={s.list}>
        <li className={s.item}><a className={s.link} href="#1">Profile</a></li>
        <li className={s.item}><a className={s.link} href="#2">Messages</a></li>
        <li className={s.item}><a className={s.link} href="#3">News</a></li>
        <li className={s.item}><a className={s.link} href="#4">Contacts</a></li>
        <li className={s.item}><a className={s.link} href="#5">Settings</a></li>
      </ul>
    </nav>
  )
}

export default Nav;

import s from "./Nav.module.css"
import Link from "./Links/Link.jsx"

const Nav = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <Link name="Profile" status="active" />
        <Link name="Messages" />
        <Link name="News" />
        <Link name="Contacts" />
        <Link name="Settings" />
      </ul>
    </nav>
  )
}

export default Nav;

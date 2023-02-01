import s from "./Link.module.css"

const Link = (props) => {
  return (
    <div className={s.item}><a className={`${s.link} ${s[props.status]}`} href="#1">{props.name}</a></div>
  )
}

export default Link;
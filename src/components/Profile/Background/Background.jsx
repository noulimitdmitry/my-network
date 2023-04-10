import s from "./Background.module.css"

const Background = (props) => {
  return (
  <div className={s.block}>
    <div className={s.text}>{props.text}</div>
    <img className={s.img} src={props.src}></img>
  </div>
  )
}

export default Background
import s from "./Background.module.css"

const Background = (props) => {
  return (
    <img className={s.img} src={props.src}></img>
  )
}

export default Background
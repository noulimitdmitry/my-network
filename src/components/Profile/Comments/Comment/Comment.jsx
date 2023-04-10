import s from "./Comment.module.css"

const Comment = (props) => {
  return (
    <div className={s.comment}>
      <img className={s.icon} src="https://cdn-icons-png.flaticon.com/512/1789/1789313.png"></img>
      <div className={s.text} >{props.comment}</div>
    </div>
  )
}

export default Comment;
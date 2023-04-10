import s from "./Comments.module.css"
import Comment from "./Comment/Comment"
const Comments = (props) => {
  let comments = props.comments.map(c => <div className={s.item}><Comment comment={c.text}/></div>)
  return (
    <div className={s.comments}>
      {comments}
    </div>
  )
}
export default Comments;
import s from "./Comments.module.css"
import Comment from "./Comment/Comment"
const Comments = (props) => {
  return (
    <div className={s.comments}>
      <Comment message="Why i am blue" />
      <Comment message="Why i am red" />
      <Comment message="Why i am yellow" />
      <Comment message="Why i am black" />
      <Comment message="Why i am white" />
    </div>
  )
}
export default Comments;
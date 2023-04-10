import Post from "./Post/Post.jsx"
import Input from "./Input/Input"
import Button from "./Button/Button"
import s from "./Posts.module.css"

const Posts = () => {
  return (
    <div className={s.posts}>
      <Post />
      <Input />
      <Button />
    </div>
  )
}

export default Posts;


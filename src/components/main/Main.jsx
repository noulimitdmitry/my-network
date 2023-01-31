import s from "./Main.module.css"
import hs from "../Wrapper.module.css"
import MyPosts from "./posts/MyPosts";
import Person from "./person/Person";
import Comments from "./comments/Comments";

const Main = () => {
  return (
    <main className={`${hs.main} ${s.main}`}>
      <img className={s.img} src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
      <Person />
      <MyPosts />
      <Comments />
    </main >
  )
}

export default Main;

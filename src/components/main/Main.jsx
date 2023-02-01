import s from "./Main.module.css"
import MyPosts from "./Posts/Post";
import Person from "./Person/Person";
import Comments from "./Comments/Comments";
import Background from "./Background/Background";

const Main = () => {
  return (
    <main className={s.main}>
      <Background src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
      <Person />
      <MyPosts />
      <Comments />
    </main >
  )
}

export default Main;

import s from "./Main.module.css"
import Posts from "./Posts/Posts";
import Person from "./Person/Person";
import Comments from "./Comments/Comments";
import Background from "./Background/Background";

const Main = () => {
  return (
    <main className={s.main}>
      <Background src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg" />
      <Person />
      <Posts />
      <Comments />
    </main >
  )
}

export default Main;

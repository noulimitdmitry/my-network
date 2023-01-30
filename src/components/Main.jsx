import MyPosts from "./main/MyPosts";
import Person from "./main/Person";
import Comments from "./main/Comments";

const Main = () => {
  return (
    <main className="app__main main">
      <img className="main__img" src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
      <Person />
      <MyPosts />
      <Comments />
    </main >
  )
}

export default Main;

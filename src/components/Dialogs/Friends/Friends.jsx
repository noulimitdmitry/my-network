import s from "./Friends.module.css"
import FriendItem from "./FriendItem/FriendItem"

const Friends = (props) => {
let path = "/dialogs/"
const friends = props.friends.map(item => <FriendItem userName={item.name} to={path + item.id} />)
  return (
    <main className={s.friends}>
      {friends}
    </main>
  );
}

export default Friends

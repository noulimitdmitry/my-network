import { NavLink } from "react-router-dom";
import s from "./FriendItem.module.css"

const FriendItem = (props) => {
  return (
    <div>
      <NavLink className={s.item} to={props.to}>
        {props.userName}
      </NavLink>
    </div>
  );
}

export default FriendItem

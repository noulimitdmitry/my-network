import Avatar from "./Avatar/Avatar";
import Information from "./Information/Information";
import s from "./Person.module.css"

const Person = () => {
  return (
    <div className={s.person}>
      <Avatar />
      <Information />
    </div>
      )
}

export default Person
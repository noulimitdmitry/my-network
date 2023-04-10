import s from "./NickName.module.css"

const NickName = (props) => {
  return (
    <h3 className={s.nickName}>{props.name}</h3>
  )
}

export default NickName;


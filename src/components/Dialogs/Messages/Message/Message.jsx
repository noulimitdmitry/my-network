import s from "./Message.module.css"

const Message = (props) => {
  return (
    <div>
      <span className={s.message}>
        {props.text}
      </span>
    </div>
  );
}

export default Message

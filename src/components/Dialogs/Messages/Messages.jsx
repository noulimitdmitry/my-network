import s from "./Messages.module.css"
import Message from "./Message/Message"


const Messages = (props) => {
  let messages = props.messages.map( m => <Message id={m.id} text={m.text} /> )
  return (
    <main className={s.messages}>
      {messages}
    </main>
  );
}

export default Messages

import s from "./Dialogs.module.css"
import Friends from './Friends/Friends';
import Messages from './Messages/Messages';



const Dialogs = (props) => {
  return (
    <main className={s.dialogs}>
      <Friends  friends={props.state.friends} />
      <Messages messages={props.state.messages}/>
    </main>
  );
}

export default Dialogs

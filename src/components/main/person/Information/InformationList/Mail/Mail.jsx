import s from "./Mail.module.css"

const Mail = (props) => {
  return (
    <div className={s.mail}>
      <span className={s.span}>mail:</span>
      <span className={s.value}> {props.mail}</span>
    </div>
  )
}

export default Mail;

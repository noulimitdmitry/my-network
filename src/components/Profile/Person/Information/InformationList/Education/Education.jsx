import s from "./Education.module.css"

const Education = (props) => {
  return (
    <div className={s.education}>
      <span className={s.span}>Education:</span>
      <span className={s.value}> {props.education}</span>
    </div>
  )
}

export default Education;

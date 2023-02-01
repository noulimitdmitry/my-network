import s from "./DateOfBirth.module.css"

const DateOfBirth = (props) => {
  return (
    <div className={s.dateOfBirth}>
      <span className={s.text}>Date of-Birth:</span>
      <span className={s.date}> {props.dateOfBirth}</span>
    </div>
  )
}

export default DateOfBirth;

{/* <span className={s.text}>Date of-Birth:</span>
<span className={s.date}>2 january</span> */}
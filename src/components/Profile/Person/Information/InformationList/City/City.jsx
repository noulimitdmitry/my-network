import s from "./City.module.css"

const City = (props) => {
  return (
    <div className={s.city}>
      <span className={s.span}>City:</span>
      <span className={s.cityName}> {props.city}</span>
    </div>
  )
}

export default City;


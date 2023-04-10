import City from "./City/City";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import Education from "./Education/Education";
import Mail from "./Mail/Mail";
import s from "./InformationList.module.css"

const InformationList = () => {
  return (
    <div className={s.list}>
      <div className={s.item}>
      <DateOfBirth dateOfBirth="09/01/1998" />
      </div>
      <div className={s.item}>
      <City city="Belz" />
      </div>
      <div className={s.item}>
      <Education education="NAVS" />
      </div>
      <div className={s.item}>
      <Mail mail="software@gmail.com" />
      </div>
    </div>
  )
}

export default InformationList;


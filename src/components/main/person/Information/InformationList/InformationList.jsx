import City from "./City/City";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import Education from "./Education/Education";
import Mail from "./Mail/Mail";
import s from "./InformationList.module.css"

const InformationList = () => {
  return (
    <div className={s.list}>
      <DateOfBirth dateOfBirth="09/01/1998" />
      <City city="Belz" />
      <Education education="NAVS" />
      <Mail mail="software@gmail.com" />
    </div>
  )
}

export default InformationList;


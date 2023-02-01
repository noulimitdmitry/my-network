import City from "./City/City";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import s from "./InformationList.module.css"

const InformationList = () => {
  return (
    <div className={s.list}>
      <DateOfBirth dateOfBirth="09/01/1998" />
      <City city="Belz" />
      <div className='personal-information__item personal-information__item_education'>
        <span className='personal-information__span personal-information__span_education'>Education:</span>
        <span className='personal-information__span personal-information__span_education-value'>NAVS</span>
      </div>
      <div className='personal-information__item personal-information__item_web-site'>
        <span className='personal-information__span personal-information__span_web-site'>mail:</span>
        <span className='personal-information__span personal-information__span_web-site-value'>software@gmail.com</span>
      </div>
    </div>
  )
}

export default InformationList;


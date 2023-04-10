import NickName from "./NickName/NickName"
import InformationList from "./InformationList/InformationList"
import s from "./Information.module.css"

const Information = () => {
  return (
    <div className={s.information}>
      <NickName name="Dmutro Nagay" />
      <InformationList />
    </div>
  )
}

export default Information;


const Person = () => {
  return (
    <div className='main__person person' >
      <img className='person__avatar' src='https://joy-pup.com/wp-content/uploads/2022/11/Avatar.jpg'></img>
      <div className='person__information personal-information'>
        <h2 className='personal-information__name'> Dmutro Nagay</h2>
        <div className='personal-information__list'>
          <div className='personal-information__item personal-information__item_date-of-birth'>
            <span className='personal-information__span personal-information__span_date-of-birth'>Date of-Birth:</span>
            <span className='personal-information__span personal-information__span_date-of-birth-value'>2 january</span>
          </div>
          <div className='personal-information__item personal-information__item_city'>
            <span className='personal-information__span personal-information__span_city'>City:</span>
            <span className='personal-information__span personal-information__span_city-value'>Lviv</span>
          </div>
          <div className='personal-information__item personal-information__item_education'>
            <span className='personal-information__span personal-information__span_education'>Education:</span>
            <span className='personal-information__span personal-information__span_education-value'>NAVS</span>
          </div>
          <div className='personal-information__item personal-information__item_web-site'>
            <span className='personal-information__span personal-information__span_web-site'>mail:</span>
            <span className='personal-information__span personal-information__span_web-site-value'>software@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person;



const Main = () => {
  return (
    <main className="app__main main">
      <img className="main__img" src="https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg"></img>
      <div className='main__person person'>
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
      <div className='main__my-posts my-posts'>
        <h2 className='my-posts__title my-posts-title'>My posts</h2>
        <div><input className='my-posts__input' /></div>
        <div><button className='my-posts__button'>send</button></div>
      </div>
      <div className='main__comments comments'>
        <img className='comments__icon' src='https://cdn-icons-png.flaticon.com/512/1789/1789313.png'></img>
        <div className='comments__text'>Hi, why am I blue</div>
      </div>
    </main>
  )
}

export default Main;

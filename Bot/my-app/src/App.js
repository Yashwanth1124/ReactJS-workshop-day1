import React from 'react'
import l1 from './rohit.jpg'
import l2 from './virat.jpg'
import './App.css'
function App(){
  return(
    <div className='img-con'>
      <h1>Rohit and virat</h1>
      <div className='sub-con'>
        <div className='img'>
          <img src={l1} alt='rohit' className='image'/>
          <p>Rohit Gurunath Sharma (born 30 April 1987) is an Indian international cricketer who currently plays for and captains the India national cricket team in Test and One Day International (ODI) matches. Previously, he also captained the team in Twenty20 International (T20I) matches and led India's win in 2024 ICC Men's T20 World Cup, subsequent to which he retired from T20s in June 2024.[4][5] The right-handed batsman, who is considered one of the best batsmen of his generation and one of the greatest opening batters of all time,[6] is known for his timing, elegance, six-hitting abilities and leadership skills. </p>
        </div>
        <div className='img'>
          <img src={l2} alt='virat' className='image'/>
          <p>Virat Kohli (Hindi pronunciation: [ʋɪˈɾɑːʈ ˈkoːɦli] ⓘ; born 5 November 1988) is an Indian international cricketer who plays Test and ODI cricket for the Indian national team. A former captain in all formats of the game, Kohli retired from the T20I format following India's win at the 2024 T20 World Cup. He's a right-handed batsman and an occasional unorthodox right arm medium bowler. Kohli is regarded as one of the greatest batsmen of all time and the greatest in the modern era. He holds the highest IPL run-scorer record, ranks third in T20I, third in ODI, and stands the fourth-highest in international cricket.[4] He also holds the record for scoring the most centuries in ODI cricket and is second in the list of most international centuries scored. </p>
        </div>
      </div>
    </div>
  )
}
export default App;
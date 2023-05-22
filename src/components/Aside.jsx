import React from 'react'
import useMulti from '../hooks/useMulti'
import '../styles/Aside.css'

export default function Aside() {

    const {mostrarInfo, mostrarPlan, mostrarAdds, mostrarSummary} = useMulti();

  return (
    <aside className='aside'>
        <div className='aside__step'>
          <p className={`aside__circle ${mostrarInfo ? 'aside__circle--active ' : ''}`}>1</p>
          <p className='aside__p'>step 1 <span className='aside__span'>your info</span></p>
        </div>
        <div className='aside__step'>
          <p className={`aside__circle ${mostrarPlan ? 'aside__circle--active ' : ''}`}>2</p>
          <p className='aside__p'>step 2 <span className='aside__span'>select plan</span></p>
        </div>
        <div className='aside__step'>
          <p className={`aside__circle ${mostrarAdds ? 'aside__circle--active ' : ''}`}>3</p>
          <p className='aside__p'>step 3 <span className='aside__span'>add-ons</span></p>
        </div>
        <div className='aside__step'>
          <p className={`aside__circle ${mostrarSummary ? 'aside__circle--active ' : ''}`}>4</p>
          <p className='aside__p'>step 4 <span className='aside__span'>summary</span></p>
        </div>
    </aside>
  )
}

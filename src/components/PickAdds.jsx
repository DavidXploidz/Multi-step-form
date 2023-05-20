import '../styles/PickAdds.css'
import Title from './Title'
import Subtitle from './Subtitle'
import useMulti from '../hooks/useMulti'

export default function PickAdds() {

    const {handleVolverPlan} = useMulti();

  return (
    <div className='adds container'>
        <div>
            <Title>Pick add-ons</Title>
            <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>
        </div>
        <div className='adds__container'>
            <div className='adds__card'>
                <input className='adds__input' type="checkbox"  />
                <p className='adds__title'>Online service <span className='adds__sub'>Access to multiplayer games</span></p>
                <p className='adds__price'>+$1/mo</p>
            </div>
            <div className='adds__card'>
                <input className='adds__input' type="checkbox"  />
                <p className='adds__title'>Large storage <span className='adds__sub'>Extra 1 TB of cloud save</span></p>
                <p className='adds__price'>+$2/mo</p>
            </div>
            <div className='adds__card'>
                <input className='adds__input' type="checkbox"  />
                <p className='adds__title'>Customizable profile <span className='adds__sub'>Custom theme on your profile</span></p>
                <p className='adds__price'>+$2/mo</p>
            </div>
        </div>
        <div className="step-bar">
            <button className="btn-primary btn-primary--back" type='button' onClick={() => handleVolverPlan() }>Go Back</button>
            <button className="btn-primary" type='button' onClick={() => handleSubmitPlan(plan) }>Next Step</button>
        </div>
    </div>
  )
}

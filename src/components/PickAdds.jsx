import '../styles/PickAdds.css'
import Title from './Title'
import Subtitle from './Subtitle'
import useMulti from '../hooks/useMulti'
import { useState, useEffect } from 'react';

export default function PickAdds() {

    const { handleVolverPlan, handleSubmitAdds, objPlan } = useMulti();

    const { plan_frecuency } = objPlan;

    const [extras, setExtras] = useState({
        online: {
            name: 'Online service',
            desc: 'Access to multiplayer games',
            price: 1,
            frecuency: 'month',
        },
        storage: {
            name: 'Larger storage',
            desc: 'Extra 1 TB of cloud save',
            price: 2,
            frecuency: 'month',
        },
        profile: {
            name: 'Customizable profile',
            desc: 'Custom theme on your profile',
            price: 2,
            frecuency: 'month',
        },
    });

    const [adds, setAdds] = useState([])

    const handleClickExtras = (e, extra) => {
        const {id, checked} = e.target;

        if (checked && !adds.includes(extra)) {
            setAdds([...adds, extra]);
        } else if (!checked && adds.includes(extra)) {
            const updatedAdds = adds.filter((item) => item !== extra);
            setAdds(updatedAdds);
        }
    }

  return (
    <div className='adds container'>
        <div>
            <Title>Pick add-ons</Title>
            <Subtitle>Add-ons help enhance your gaming experience.</Subtitle>
        </div>
        <div className='adds__container'>
            <div className='adds__card'>
                <input className='adds__input' id="online" type="checkbox" onClick={ (e) => handleClickExtras(e, extras.online) }  />
                <p className='adds__title'>Online service <span className='adds__sub'>Access to multiplayer games</span></p>
                <p className='adds__price'>{plan_frecuency === 'monthly' ? '+$1/mo' : '+$10/yr'}</p>
            </div>
            <div className='adds__card'>
                <input className='adds__input' id='storage' type="checkbox" onClick={ (e) => handleClickExtras(e, extras.storage) }  />
                <p className='adds__title'>Large storage <span className='adds__sub'>Extra 1 TB of cloud save</span></p>
                <p className='adds__price'>{plan_frecuency === 'monthly' ? '+$2/mo' : '+$20/yr'}</p>
            </div>
            <div className='adds__card'>
                <input className='adds__input' id='profile' type="checkbox" onClick={ (e) => handleClickExtras(e, extras.profile) } />
                <p className='adds__title'>Customizable profile <span className='adds__sub'>Custom theme on your profile</span></p>
                <p className='adds__price'>{plan_frecuency === 'monthly' ? '+$2/mo' : '+$20/yr'}</p>
            </div>
        </div>
        <div className="step-bar">
            <button className="btn-primary btn-primary--back" type='button' onClick={() => handleVolverPlan() }>Go Back</button>
            <button className="btn-primary" type='button' onClick={() => handleSubmitAdds(adds) }>Next Step</button>
        </div>
    </div>
  )
}

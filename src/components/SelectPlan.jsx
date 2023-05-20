import '../styles/SelectPlan.css'
import Title from "./Title"
import Subtitle from "./Subtitle"
import { useState } from 'react'
import useMulti from '../hooks/useMulti'

export default function SelectPlan() {

    const { handleSubmitPlan, handleVolverInfo } = useMulti();

    const [plan, setPlan] = useState({
        title: '',
        price: '',
        trial: '',
    });

    const [selected, setSelected] = useState(null);

    const handleClickPlan = (type) => {
        if(type === 'arcade'){
            setPlan({
                title: 'arcade',
                price: 90,
                trial: '2 months free',
            });
            setSelected(type);
            
        }
        if(type === 'advanced'){
            setPlan({
                title: 'advanced',
                price: 120,
                trial: '2 months free',
            });
            setSelected(type);
        }
        if(type === 'pro'){
            setPlan({
                title: 'pro',
                price: 150,
                trial: '2 months free',
            });
            setSelected(type);
        }

    }

    // const select = selected ? 'select-plan__card--active' : '';

  return (
    <div className='select-plan container'>
        <div>
            <Title>Select your plan</Title>
            <Subtitle>You have the option of monthly on yearly billing.</Subtitle>
        </div>
        <div className="select-plan__grid">
            <div className={`select-plan__card ${selected === 'arcade' ? 'select-plan__card--active' : ''} `}  onClick={() => handleClickPlan('arcade') } >
                <img src="/images/icon-arcade.svg" alt="icon arcade" />
                <div className='card__content'> 
                    <h3 className="card__title">Arcade</h3>
                    <p className="card__price">$90/yr</p>
                    <span className="card__trial">2 months free</span>
                </div>
            </div>
            <div className={`select-plan__card ${selected === 'advanced' ? 'select-plan__card--active' : ''} `}  onClick={() => handleClickPlan('advanced') } >
                <img src="/images/icon-advanced.svg" alt="icon arcade" />
                <div className='card__content'> 
                    <h3 className="card__title">Advanced</h3>
                    <p className="card__price">$120/yr</p>
                    <span className="card__trial">2 months free</span>
                </div>
            </div>
            <div className={`select-plan__card ${selected === 'pro' ? 'select-plan__card--active' : ''} `}  onClick={() => handleClickPlan('pro') }>
                <img src="/images/icon-pro.svg" alt="icon arcade" />
                <div className='card__content'> 
                    <h3 className="card__title">Pro</h3>
                    <p className="card__price">$150/yr</p>
                    <span className="card__trial">2 months free</span>
                </div>
            </div>
        </div>
        <div className="step-bar">
            <button className="btn-primary btn-primary--back" type='button' onClick={() => handleVolverInfo() }>Go Back</button>
            <button className="btn-primary" type='button' onClick={() => handleSubmitPlan(plan) }>Next Step</button>
        </div>
    </div>
  )
}

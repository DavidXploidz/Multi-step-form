import '../styles/SelectPlan.css'
import Title from "./Title"
import Subtitle from "./Subtitle"
import { useState, useEffect } from 'react'
import useMulti from '../hooks/useMulti'

export default function SelectPlan() {

    const { handleSubmitPlan, handleVolverInfo } = useMulti();

    const [plan, setPlan] = useState({});

    const [frecuency, setFrecuency] = useState(true);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        handleClickToggle();
    },[])
    
    const handleClickPlan = (type) => {
        let planType = {}
        if(type === 'arcade'){
            planType = {title: 'arcade', price: 9}
            if(!frecuency){
                planType = {title: 'arcade', price: 90, trial: '2 months free'}
            }
            setPlan({...plan,...planType});
            setSelected(type);
        }
        if(type === 'advanced'){
            planType = {title: 'advanced', price: 12}
            if(!frecuency){
                planType = {title: 'advanced', price: 120, trial: '2 months free'}
            }
            setPlan({...plan,...planType});
            setSelected(type);
        }
        if(type === 'pro'){
            planType = {title: 'pro', price: 15}
            if(!frecuency){
                planType = {title: 'pro', price: 150, trial: '2 months free'}
            }
            setPlan({...plan,...planType});
            setSelected(type);
        }
    }

    const handleClickToggle = () => {
        let plan_frecuency = '';
        setFrecuency(!frecuency)
        if(frecuency){
            plan_frecuency = 'yearly'
            setPlan({...plan, plan_frecuency})
            return;
        }
        plan_frecuency = 'monthly'
        setPlan({...plan, plan_frecuency})
    }

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
                    {!frecuency ? <p className="card__price">$90/yr</p> : <p className="card__price">$9/mo</p> }
                    {!frecuency &&  <span className="card__trial">2 months free</span> }
                </div>
            </div>
            <div className={`select-plan__card ${selected === 'advanced' ? 'select-plan__card--active' : ''} `}  onClick={() => handleClickPlan('advanced') } >
                <img src="/images/icon-advanced.svg" alt="icon arcade" />
                <div className='card__content'> 
                    <h3 className="card__title">Advanced</h3>
                    {!frecuency ? <p className="card__price">$120/yr</p> : <p className="card__price">$12/mo</p> }
                    {!frecuency &&  <span className="card__trial">2 months free</span> }
                </div>
            </div>
            <div className={`select-plan__card ${selected === 'pro' ? 'select-plan__card--active' : ''} `}  onClick={() => handleClickPlan('pro') }>
                <img src="/images/icon-pro.svg" alt="icon arcade" />
                <div className='card__content'> 
                    <h3 className="card__title">Pro</h3>
                    {!frecuency ? <p className="card__price">$150/yr</p> : <p className="card__price">$15/mo</p> }
                    {!frecuency &&  <span className="card__trial">2 months free</span> }
                </div>
            </div>
        </div>
        <div className='select-plan__toggle'>
            <p className={`toggle__p ${frecuency ? 'toggle__p--active' : ''}`}>Monthly</p>
            <i className={`toggle__icon ${frecuency ? 'toggle__icon--reverse' : ''}`} onClick={() => handleClickToggle()}></i>
            <p className={`toggle__p ${!frecuency ? 'toggle__p--active' : ''}`}>Yearly</p>
        </div>
        <div className="step-bar">
            <button className="btn-primary btn-primary--back" type='button' onClick={() => handleVolverInfo() }>Go Back</button>
            <button className="btn-primary" type='button' onClick={() => handleSubmitPlan(plan) }>Next Step</button>
        </div>
    </div>
  )
}

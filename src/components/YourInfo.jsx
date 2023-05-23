import '../styles/YourInfo.css'
import { useState } from 'react'
import Subtitle from './Subtitle'
import Title from './Title'
import useMulti from '../hooks/useMulti'

export default function YourInfo() {

    const { handleSubmitInfo } = useMulti();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState(false);

    const handleValidarCampos = () => {
        if(name === '' || email === '' || phone === ''){
            setError(true);
            setTimeout(() => {
                setError(false);
            }, 3000);
            return;
        }
        handleSubmitInfo(name, email, phone);
    }
  

  return (
    <div className='your-info container'>
        <div>
            <Title>Personal info</Title>
            <Subtitle>Please provide your name, email address, and phone number.</Subtitle>
        </div>
        <form action="" className='your-info__form'>
            <div className={`${error && 'your-info__content--error'} your-info__content`}>
                <label htmlFor='name'className='your-info__label'>name</label>
                <input id='name' className='your-info__input' type="text" placeholder='e.g. Stephen King' onChange={(e) => setName(e.target.value)} />
            </div>
            <div className={`${error && 'your-info__content--error'} your-info__content`}>
                <label htmlFor='email'className='your-info__label'>email</label>
                <input id='email' className='your-info__input' type="email" placeholder='e.g. stephen@lorem.com' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={`${error && 'your-info__content--error'} your-info__content`}>
                <label htmlFor='phone'className='your-info__label'>phone</label>
                <input id='phone' className='your-info__input' type="number" placeholder='e.g. 210-345-9920' onChange={(e) => setPhone(e.target.value)} />
            </div>
        </form>
        <div className="step-bar">
            <button className="btn-primary btn-primary--back" disabled type='button'></button>
            <button className="btn-primary" type='button' onClick={() => handleValidarCampos() }>Next Step</button>
        </div>
    </div>
  )
}

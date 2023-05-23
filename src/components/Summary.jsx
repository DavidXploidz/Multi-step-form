import calcularTotal from '../helpers';
import useMulti from '../hooks/useMulti'
import '../styles/Summary.css'
import Subtitle from './Subtitle'
import Success from './Success';
import Title from './Title'

export default function Summary() {

    const { handleVolverAdds, objPlan, mostrarConfirm, handleSubmitConfirm, handleVolverPlan } = useMulti();

    const { title, plan_frecuency, price, adds } = objPlan;

  return (
    <>
        {mostrarConfirm ? <Success /> : (
            <div className='summary container'>
                <div>
                    <Title>Finishing Up</Title>
                    <Subtitle>Double-check everything looks OK before confirming.</Subtitle>
                </div>
                <div>
                    <div className='summary__resume'>
                        <div className='summary__content'>
                            <p className='summary__title'>{title} <span>({plan_frecuency})</span><span className="summary__change" onClick={() => handleVolverPlan()}>Change</span></p>
                            <p className='summary__title'>{plan_frecuency === 'monthly' ? `$${price}/mo` : `$${price}/yr`}</p>
                        </div>
                        {adds.length > 0 ? (
                            adds.map((add, index )=> {
                                const {name, prices} = add;
                                return(
                                    <div key={index} className='summary__content'>
                                        <p className='summary__add'>{name}</p>
                                        <p className='summary__price'>{plan_frecuency === 'monthly' ? `$${prices.priceMonth}/mo` : `$${prices.priceYear}/yr`}</p>
                                    </div>
                                )
                            })
                        ): (
                            null
                        )}

                    </div>
                    <div className='summary__resume summary__resume--total'>
                        <div className='summary__content'>
                            <p className='summary__add'>Total per {plan_frecuency === 'monthly' ? '(monthly)' : '(yearly)'}</p>
                            <p className='summary__total'>{calcularTotal(price, adds, plan_frecuency)}</p>
                        </div>
                    </div>
                </div>
                <div className="step-bar">
                    <button className="btn-primary btn-primary--back" type='button' onClick={() => handleVolverAdds() }>Go Back</button>
                    <button className="btn-primary btn-primaty--confirm" type='button' onClick={() => handleSubmitConfirm() }>Confirm</button>
                </div>
            </div>
        )}
    </>
  )
}

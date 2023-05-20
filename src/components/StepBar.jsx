import '../styles/StepBar.css'

export default function StepBar() {
  return (
    <div className="step-bar">
        <button className="btn-primary btn-primary--back" disabled type='button'></button>
        <button className="btn-primary" type='button' onClick={() => handleSubmitInfo(name, email, phone) }>Next Step</button>
    </div>
  )
}

import Subtitle from "./Subtitle";
import Title from "./Title";
import '../styles/Success.css'


export default function Success() {
  return (
    <div className='success'>
        <img src="images/icon-thank-you.svg" alt="icon successful" />
        <Title>Thank you!</Title>
        <Subtitle>
            Thanks for confirming your subscription! We hope you have fun 
            using our platform. If you ever need support, please feel free 
            to email us at support@loremgaming.com.
        </Subtitle>
    </div>
  )
}

'use client'
// import 'bootstrap/dist/css/bootstrap.css'
import QRCode from "qrcode.react";
import Image from 'next/image'
import {useState, useRef} from 'react'
import {HeroSection, ProjectSection, PhilantrophySection} from 'src/components';


export default function Home() {
  return(
    <div className="">
      <HeroSection />

      <ProjectSection />

      <DonationComponent />

    </div>
  )
}


const causes = [
  "Food and Water Provision",
  "Clothing Giving",
  "Housing and Medical Care",
  "Toys Provision",
  "Education for Growth",
];



export const DonationComponent = () => {
  const [amount, setAmount] = useState(null);
  const [cause, setCause] = useState(null);
  const [showQR, setShowQR] = useState(false);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCauseChange = (event) => {
    setCause(event.target.value);
  };

  const handleDonateClick = () => {
    if (amount && cause) {
      setShowQR(true);
    }
  };


  const AmountScreen = ({ }) => {
    const input = useRef()

    const [activeAmount, setActiveAmount] = useState('25')
    const [activeCause, setActiveCause] = useState('')
    const [donation, setDonation] = useState(25)

    function handleClick(){
      const bar = input.current;
      bar.focus();
      setActiveAmount('other')
    }

    function changeAmount(amt){
      setActiveAmount(`${amt}`)
      setDonation(amt)
    }

    const amts = [25, 50, 75, 100, 200, 500, 1000]

    return(
      <div style={{ marginTop: '2rem'}}>
        <div style={{ marginTop: '2rem'}}>
          <h3>Please select a project you would love to support with a donation</h3>
          <div>
            <ul className="list">
            {causes.map((cause) => 
              <li className={`cause ${activeCause === cause && 'active'}`} key={cause} onClick={() => setCause(cause)}> {cause}</li>
            )}
          </ul>
          </div>
        </div>

        <h3 class="f-head">Please enter the amount you wish to donate</h3>
          
        <input ref={input} type="number" min="10" className="p-2 input" onInput={(e) => setDonation(e.target.value)} value={donation} />
        <div className="amount-row">
          {amts.map(amt =>
            <span onClick={() => changeAmount(amt)}  className={` amount ${activeAmount === `${amt}` && 'active'} `}> ${amt} </span>
          )}
          <span  onClick={handleClick} className={` amount ${activeAmount === 'other' && 'active'} `}> Other </span>
        </div>

        <h3 class="f-head"> Additional Notes </h3>
        <textarea className="input" placeholder="Type your message here"></textarea>

      </div>
    )
  }

  return (
    <div className="container" style={{maxWidth: '700px', padding: "4rem auto", marginBottom: '6rem'}}>


      {showQR ? (
        <div>
          <p>Scan this QR code to donate:</p>
          <QRCode value={`bitcoin:${process.env.BTC_RECEIVERS_ADDRESS}?amount=${amount}&message=${cause}`} />
          <p>Notes:</p>
          <ul>
            <li>Make sure to copy the exact amount and message to avoid any issues.</li>
            <li>Don't forget to include the transaction fee.</li>
          </ul>
        </div>
      ) : (

        <div>
          <AmountScreen />
          <button className="btn btn-primary" onClick={handleDonateClick}>Donate</button>
        </div>
      )}
    </div>
  );
};


'use client'
// import 'bootstrap/dist/css/bootstrap.css'
import QRCode from "qrcode.react";
import Image from 'next/image'
import {useState, useRef} from 'react'
import {HeroSection, ProjectSection, PhilantrophySection} from 'src/components';
import emailjs from '@emailjs/browser';

export default function Home() {

  async function onDonationSent(data){
    const {name, cause, amount, notes} = data;

    let res = await emailjs.send("service_ptsh8h8","template_fc1pm4n",{
      name,
      cause,
      amount,
      notes
    });

    console.log("Sending Mail....", res)
  }


  return(
    <div className="">
      <HeroSection />

      <DonationComponent onDonationSent={onDonationSent} />

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



export const DonationComponent = ({ onDonationSent }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(25);
  const [cause, setCause] = useState("");
  const [notes, setNotes] = useState("");
  const [showQR, setShowQR] = useState(false);
  const [donated, setDonated] = useState(false);
  const [step, setStep] = useState(1);
  const [activeAmount, setActiveAmount] = useState('25')
  const [activeCause, setActiveCause] = useState('')
  const input = useRef()
  const btcAddress = "bc1q3rtt5dzrunyvu0k36tzj640qclgm2jvnjwe5nk"

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const selectCause = (val) => {
    setCause(val);
    setActiveCause(val);
  };

  function handleDonateClick(){
    if (!amount)
      return window.alert("Please enter or choose an amount")
    if(!cause)
      return window.alert("Please select a Cause")
    if(!name)
      return window.alert("Please enter your name")
    if(!email)
      return window.alert("Please enter your email")
    return setShowQR(true);
  };

  function handleAmountClick(){
    const bar = input.current;
    bar.focus();
    setActiveAmount('other')
  }

  function onDonation(){
    setShowQR(false);
    setDonated(true);

    onDonationSent({
      name,
      email,
      cause,
      amount,
      notes
    })
  }

  function changeAmount(amt){
    setActiveAmount(`${amt}`)
    setAmount(amt)
  }

  function copyAddress(){
    window.navigator.clipboard.writeText(btcAddress)
    alert("Address copied!")
  }

  const amts = [25, 50, 75, 100, 200, 500, 1000]

  return (
    <div id="fh5co-services-section">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
            <h3>Donate to support any of our projects</h3>
            <p>Help us provide housing, clean water, proper nutrition, health supplies, educational materials and more.</p>
          </div>
        </div>
      </div>

      <div className="container" style={{maxWidth: '700px', padding: "2rem auto"}}>
        {
          donated ?
            <div className="centered mt-3">
              <h4> Thank You for your Donation.</h4>
              <p> Someone from our team may reach out to you soon! </p>
            </div>
         : showQR ? 
                (
                  <div className="centered">
                    <h3> Scan the QRCode or Copy the address below </h3>

                    <div className="mb-2">
                      <QRCode 
                        size={256}
                        value={`${btcAddress}`}
                      />
                    </div>

                    <div className="centered mb-2">
                      <h4 className="btc-addr"> {btcAddress} </h4>
                      <button className="btn" onClick={copyAddress}>Copy Address</button>
                    </div>

                    <div className="">
                      <h3> How to Donate </h3>
                      <ol>
                        <li> Copy the bitcoin address above or scan the QR code </li>
                        <li> Send your donation to the address </li>
                        <li> Click the "I've made a donation" button to send us a notification</li>                
                        <li> We'll send you an email to confirm your donation and update you on our progress.</li>
                      </ol>

                      <button onClick={onDonation} className="btn btn-primary"> I've made a Donation </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    {/* Contact info */}
                    <div>
                      <div className="form-group">
                        <h4 className="mb-1">Please enter your name </h4>
                        <input name="fullName" onInput={e => setName(e.target.value)} className="input" type="text" />
                      </div>

                      <div className="form-group">
                        <h4 className="mb-1"> Your Email </h4>
                        <input name="email" onInput={e => setEmail(e.target.value)} className="input" type="email" />
                      </div>
                    </div>

                   {/* Amount and Cause */}
                    <div style={{ marginTop: '2rem'}}>
                      <div style={{ marginTop: '2rem'}}>
                        <h4 className="mb-1">Please select a project you would love to support with a donation</h4>
                        <div>
                          <ul className="list">
                          {causes.map((cause) => 
                            <li className={`cause ${activeCause === cause && 'active'}`} key={cause} onClick={() => selectCause(cause)}> {cause}</li>
                          )}
                        </ul>
                        </div>
                      </div>

                      <h4 class="mb-1">Please enter the amount you wish to donate</h4>
                        
                      <input name="amount" ref={input} type="number" min="10" className="p-2 input" onInput={(e) => setAmount(e.target.value)} value={amount} />
                      <div className="amount-row">
                        {amts.map(amt =>
                          <span onClick={() => changeAmount(amt)}  className={` amount ${activeAmount === `${amt}` && 'active'} `}> ${amt} </span>
                        )}
                        <span  onClick={handleAmountClick} className={` amount ${activeAmount === 'other' && 'active'} `}> Other </span>
                      </div>

                      <h4 class="mb-1"> Additional Notes </h4>
                      <textarea name="notes" onInput={e => setNotes(e.target.value)} className="input" placeholder="Type your message here"></textarea>
                    </div>

                    <button onClick={handleDonateClick} className="btn btn-primary"> Continue </button>
                  </div>
              )
         }        
      </div>
    </div>
  );
};


'use client'
import 'bootstrap/dist/css/bootstrap.css'
import QRCode from "qrcode.react";
import Image from 'next/image'
import {useState} from 'react'
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
  { name: "Food and Water Provision", value: "cause1" },
  { name: "Clothing Giving", value: "cause2" },
  { name: "Housing and Medical Care", value: "cause3" },
  { name: "Toys Provision", value: "cause4" },
  { name: "Education for Growth", value: "cause5" },
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

  return (
    <div className="container py-5">
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
          <div className="form-group">
            <p>Select the amount you want to donate:</p>
            <div className="row">
              <input type="radio" name="amount" className="p-2 rounded" onClick={() => setAmount(50)} value="$50 USD" />
              <input type="radio" name="amount" className="p-2 rounded" onClick={() => setAmount(50)} value="$50 USD" />
              <input type="radio" name="amount" className="p-2 rounded" onClick={() => setAmount(50)} value="$50 USD" />
              <input type="radio" name="amount" className="p-2 rounded" onClick={() => setAmount(50)} value="$50 USD" />
            </div>
          </div>

          <div className="form-group">
            <p>Select the cause you want to donate for:</p>
            <div>
              {causes.map((cause) => (
                <div key={cause.name}>
                  <input
                    type="radio"
                    id={cause.name}
                    name="reason"
                    value={cause.name}
                    // checked={cause.name === cause}
                    onChange={handleCauseChange}
                  />
                  <label htmlFor={cause.name}>{cause.name}</label>
                </div>
              ))}
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleDonateClick}>Donate</button>
        </div>
      )}
    </div>
  );
};


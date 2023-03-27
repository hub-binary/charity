'use client'
import QRCode from "qrcode.react";
import Image from 'next/image'


export default function Home() {
  return(
    <div className="">
      
    </div>
  )
}


const causes = [
  { name: "Cause 1", value: "cause1" },
  { name: "Cause 2", value: "cause2" },
  { name: "Cause 3", value: "cause3" },
  { name: "Cause 4", value: "cause4" },
  { name: "Cause 5", value: "cause5" },
  { name: "Cause 6", value: "cause6" },
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
    <div>
      {showQR ? (
        <div>
          <p>Scan this QR code to donate:</p>
          <QRCode value={`bitcoin:${process.env.REACT_APP_BTC_ADDRESS}?amount=${amount}&message=${cause}`} />
          <p>Notes:</p>
          <ul>
            <li>Make sure to copy the exact amount and message to avoid any issues.</li>
            <li>Don't forget to include the transaction fee.</li>
          </ul>
        </div>
      ) : (
        <div>
          <p>Select the amount you want to donate:</p>
          <div>
            <button onClick={() => setAmount(1)}>1 BTC</button>
            <button onClick={() => setAmount(0.5)}>0.5 BTC</button>
            <button onClick={() => setAmount(0.1)}>0.1 BTC</button>
          </div>
          <p>Select the cause you want to donate for:</p>
          <div>
            {causes.map((cause) => (
              <div key={cause.value}>
                <input
                  type="radio"
                  id={cause.value}
                  name="cause"
                  value={cause.value}
                  checked={cause.value === cause}
                  onChange={handleCauseChange}
                />
                <label htmlFor={cause.value}>{cause.name}</label>
              </div>
            ))}
          </div>
          <button onClick={handleDonateClick}>Donate</button>
        </div>
      )}
    </div>
  );
};


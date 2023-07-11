import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './App.css';

export default function App() {
  const [qrVal, setQrVal] = useState(''); 
  const [generatedQrVal, setGenQrVal] = useState('');
  const [showQr, setShowQr] = useState(false);

  function handleChange(e){
    setQrVal(e.target.value)
  }

  function handleKeyPress(e){
    e.key === 'Enter' && generateQr();
  }

  function generateQr(){
    qrVal && (
      setShowQr(true),
      setGenQrVal(qrVal)
      );

  }

  return (
    <main>
      <section>
        <h1>
          Enter a URL to Generate Your QR Code!
        </h1>
        <div className='qrCode'>
          {showQr ? <QRCode size={200} bgColor='white' fgColor='black' value={generatedQrVal}/> : <h2>QR Box</h2>}
        </div>
        <div style={{display:'flex', alignItems:'center'}}>
          <input type='text' placeholder='Your url or text..' onChange={handleChange} onKeyDown={handleKeyPress}/>
          <button onClick={generateQr}>Generate</button>
        </div>
      </section>
    </main>
  )
}
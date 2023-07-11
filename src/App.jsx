import React, {useState} from 'react';
import QRCode from 'react-qr-code';
import './App.css';
import ColorPicker from './ColorPicker';

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
    qrVal ? (
      setShowQr(true),
      setGenQrVal(qrVal)
    ) : alert('Please Enter your text or URL of choice!');
  }

// converts the QRCode SVG element to an image by rendering it onto a canvas, 
//converting the canvas content to a PNG Data URL, 
//and then triggering the download of the resulting image.
  function downloadQR() {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <main>
      <section>
        {showQr ? <ColorPicker/> : <h1>Enter a URL to Generate Your QR Code!</h1>}
        <div className='qrCode'>
          {showQr ? <QRCode id='QRCode' size={200} bgColor='white' fgColor='black' value={generatedQrVal}/> : <h2>QR Box</h2>}
        </div>
        {showQr && <button className='dwnlBtn' onClick={downloadQR}>Download QR</button>}
        <div className="genQr" style={{display:'flex', alignItems:'center'}}>
          <input type='text' placeholder='Your url or text..' onChange={handleChange} onKeyDown={handleKeyPress}/>
          <button onClick={generateQr}>Generate</button>
        </div>
      </section>
    </main>
  )
}
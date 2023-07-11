import React from 'react';
import './App.css';

export default function ColorPicker() {
  return (
    <section className='colorPicker'>        
        <div className='fg-box'>
            <p>Foreground Color</p>
            <input type='color'/>
        </div>
        <div className='bg-box'>
            <p>Background Color</p>
            <input type='color'/>
        </div>
    </section>
  )
}

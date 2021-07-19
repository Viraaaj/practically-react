import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

function CreditCards() {

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [cvc, setCvc] = useState('')
  const [expiry, setExpiry] = useState('')
  const [focus, setFocus] = useState('')

  return (
    <div>

      <Cards number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus} />
      <form>

        <input 
          type="tel" 
          name='number' 
          placeholder="Card Number" 
          value={number} 
          onChange={e => setNumber(e.target.value)}
          onFocus={e=> setFocus(e.target.name)}
          />

          <input 
          type="text" 
          name='name' 
          placeholder="Card Holder name" 
          value={name} 
          onChange={e => setName(e.target.value)}
          onFocus={e=> setFocus(e.target.name)}
          />

          <input 
          type="text" 
          name='expiry' 
          placeholder="Card Expiry date" 
          value={expiry} 
          onChange={e => setExpiry(e.target.value)}
          onFocus={e=> setFocus(e.target.name)}
          />

          <input 
          type="tel" 
          name='cvc' 
          placeholder="cvc" 
          value={cvc} 
          onChange={e => setCvc(e.target.value)}
          onFocus={e=> setFocus(e.target.name)}
          />


      </form>
      
    </div>
  )
}

export default CreditCards

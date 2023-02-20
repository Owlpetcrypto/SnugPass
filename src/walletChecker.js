import React, { useState } from 'react'
import { addresses } from './addresses'

function WalletChecker() {
  const [address, setAddress] = useState('')
  const [result, setResult] = useState('')

  function handleAddressChange(event) {
    setAddress(event.target.value)
  }

  function handleCheckAddress() {
    const isInArray = addresses.includes(address)

    if (isInArray) {
      setResult('This address is snug listed')
    } else {
      setResult('This address is not snug listed')
    }
  }

  return (
    <div className="flex">
      <div>
        <p className="text">{result}</p>
      </div>
      <div className="wallet-check">
        <input
          className="inside-wallet-check"
          type="text"
          id="address"
          value={address}
          placeholder="ENTER WALLET"
          onChange={handleAddressChange}
        />
      </div>
      <div className="button-check">
        <button
          type="button"
          className="inside-button-check"
          onClick={handleCheckAddress}
        >
          CHECK ADDRESS
        </button>
      </div>
    </div>
  )
}

export default WalletChecker

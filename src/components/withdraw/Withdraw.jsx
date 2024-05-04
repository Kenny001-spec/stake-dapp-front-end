import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const Withdraw = () => {

    const handleToast = () => {
        toast.error('Please enter a valid Positive Number');
    }
  return (
    <div>
        <h1>Amount to withdraw</h1>
        <input type="text" />

        <h2>Withdraw your Stake</h2>
    </div>
  )
}

export default Withdraw
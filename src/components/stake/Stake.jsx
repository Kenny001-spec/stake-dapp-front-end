import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const Stake = () => {

    const handleToast = () => {
        toast.error('Please enter a valid Positive Number')
    }
  return (
    <div>
        <h1 onClick={handleToast}>Stake</h1>
    </div>
  )
}

export default Stake
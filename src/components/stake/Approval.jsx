import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const Approval = () => {

    const handleToast = () => {
        toast.error('Please enter a valid positive number')
    }
  return (
    <div>
        <h1 onClick={handleToast}>Token Approval</h1>
    </div>
  )
}

export default Approval
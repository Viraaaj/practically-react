import React from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast }) => {
  return(
    <div>
      This is custom Toast notification!!
      <button onClick={closeToast} > Close </button>
    </div>
  )
}

toast.configure()

function ToastNotifications() {

  const notify = () => {
    toast('Basic Notification', {position: toast.POSITION.TOP_LEFT})
    
    toast.success('Success Notification', {position: toast.POSITION.TOP_RIGHT, autoClose:1000})

    toast.info('Info Notification', {position: toast.POSITION.TOP_CENTER, autoClose:false})
    
    toast.warn(<CustomToast />, {position: toast.POSITION.BOTTOM_CENTER})
    
    toast.error('Error Notification', {position: toast.POSITION.BOTTOM_LEFT})
    toast('Basic Notification', {position: toast.POSITION.BOTTOM_RIGHT})
  }

  return (
    <div className="App">
      
      <button onClick={notify} > Notify!! </button>

    </div>
  );
}

export default ToastNotifications;

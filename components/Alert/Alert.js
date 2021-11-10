import React from 'react'
import { toast } from "react-toastify";
import ErrorIcon from '@material-ui/icons/Error';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

const Alert = (type, message) => {
  switch (type) {
      case 'warning':
          return toast.warning(<div><WarningIcon /> {message}</div>) // look this line
      case 'error':
          return toast.error(<div><ErrorIcon /> {message}</div>) // look this line
      case 'success':
          return toast.success(<div><BeenhereIcon /> {message}</div>)
      case 'info':
          return toast.info(<div><InfoIcon /> {message}</div>)
      default:
          return toast(message)
  }
} 

export default Alert;
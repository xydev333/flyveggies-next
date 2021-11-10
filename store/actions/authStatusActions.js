import {
  INCOREECT_PASSWORD,
  UNREGISTERD_USER,
  VERIFICATION_EMAIL_SENT,
  VERIFY_FIRST
} from './action-types/authStatus-actions'

//VERIFICATION_EMAIL_SENT
const verficationEmailSent = () => {
  console.log("action");
  return {
    type: VERIFICATION_EMAIL_SENT
  }
}

const verifyFirst = () => {
  return {
    type: VERIFY_FIRST
  }
}

const unregisterdUser = () => {
  return {
    type: UNREGISTERD_USER
  }
}

const incorrectPassword = () => {
  return {
    type: INCOREECT_PASSWORD
  }
}

export default {
  verficationEmailSent,
  verifyFirst,
  unregisterdUser,
  incorrectPassword
}
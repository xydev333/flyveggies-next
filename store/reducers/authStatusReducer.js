import {
  VERIFICATION_EMAIL_SENT,
  VERIFY_FIRST,
  UNREGISTERD_USER,
  INCOREECT_PASSWORD
} from "../actions/action-types/authStatus-actions";

const initState = {
  authStatus: ''
}

const authStatus = (state = initState, action) => {
  if (action.type === VERIFICATION_EMAIL_SENT) {
    return {
      authStatus: AUTH_STATUS.VERIFICATION_EMAIL_SENT
    }
  }

  if (action.type === VERIFY_FIRST) {
    return {
      authStatus: AUTH_STATUS.VERIFY_FIRST
    }
  }

  if (action.type === UNREGISTERD_USER) {
    return {
      authStatus: AUTH_STATUS.UNREGISTERD_USER
    }
  }

  if (action.type === INCOREECT_PASSWORD) {
    return {
      authStatus: AUTH_STATUS.INCOREECT_PASSWORD
    }
  }

  else {
    return state;
  }
}

export default authStatus
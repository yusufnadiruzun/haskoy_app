const SIGNINSUCCESS = "SIGNINSUCCESS";
const SIGNINSTARTED = "SIGNINSTARTED";


export function SigninStarted() {
  return {
    type: SIGNINSTARTED,
  }
};


export function SigninSuccess() {
  return {
    type: SIGNINSUCCESS,
  }
};
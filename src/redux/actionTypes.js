const SIGNINSUCCESS = "SIGNINSUCCESS";
const SIGNINSTARTED = "SIGNINSTARTED";
const LOGINSTARTED = "LOGINSTARTED";
const LOGINSUCCESS = "LOGINSUCCESS";
const STOPLOADING = "STOPLOADING";
export function SigninStarted() {
  return {
    type: SIGNINSTARTED,
  };
}
export function SigninSuccess() {
  return {
    type: SIGNINSUCCESS,
  };
}

export function LoginStarted() {
  return {
    type: LOGINSTARTED,
  };
}

export function LoginSuccess() {
  return {
    type: LOGINSUCCESS,
  };
}

export function StopLoading() {
  return {
    type: STOPLOADING,
  };
}
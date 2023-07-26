const SIGNINSUCCESS = "SIGNINSUCCESS";
const SIGNINSTARTED = "SIGNINSTARTED";
const LOGINSTARTED = "LOGINSTARTED";
const LOGINSUCCESS = "LOGINSUCCESS";
const STOPLOADING = "STOPLOADING";
const GETUSERPERMISSIONS = "GETUSERPERMISSIONS";

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

export function LoginSuccess(usertoken, phone, name, surname) {
  return {
    type: LOGINSUCCESS,
    usertoken: usertoken,
    phone: phone,
    name: name,
    surname: surname,
    
  };
}

export function StopLoading() {
  return {
    type: STOPLOADING,
  };
}

export function getUserPermissions(permissions) {
  return {
    type: GETUSERPERMISSIONS,
    permissions: permissions,
  };
}
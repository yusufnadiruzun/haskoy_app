const SIGNINSUCCESS = "SIGNINSUCCESS";
const SIGNINSTARTED = "SIGNINSTARTED";
const LOGINSTARTED = "LOGINSTARTED";
const LOGINSUCCESS = "LOGINSUCCESS";
const STOPLOADING = "STOPLOADING";
const GETUSERPERMISSIONS = "GETUSERPERMISSIONS";
const GETSTUDENTPASTINSPECTION = "GETSTUDENTPASTINSPECTION"
const SETMODALVISIBLE = "SETMODALVISIBLE";
const UPDATE_INSPECTION = "UPDATE_INSPECTION";

export function SigninStarted() {
  return {
    type: SIGNINSTARTED,
  };
}
export function SigninSuccess(usertoken, phone, name, surname) {
  return {
    type: SIGNINSUCCESS,
    usertoken: usertoken,
    phone: phone,
    name: name,
    surname: surname,
    
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

export function getStudentPastInspection(inspection) {
  return {
    type: GETSTUDENTPASTINSPECTION,
    inspection: inspection,
  };
}
export function setModalVisible(modalVisible) {
  return {
    type: SETMODALVISIBLE,
    modalVisible: modalVisible,
  };
}

export const updateInspectionData = (updatedInspection) => ({
  type: UPDATE_INSPECTION,
  payload: updatedInspection,
});

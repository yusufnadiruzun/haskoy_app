import api from "./BaseUrl";

class PermissionApi {

    async getUserPermissions(usertoken) {
        
        console.log(usertoken)
        return await api.post("/permission/v1/permissionControl", {
            usertoken
        });
    }


}

export default new PermissionApi();
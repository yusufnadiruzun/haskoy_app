import api from "./BaseUrl";

class InspectionApi {

    async createInspection(inspection_name) {
        return await api.post("/inspection/v1/createInspection", {
           inspection_name:inspection_name
        });
    }
    async addInspection(inspection_name,phone,status){
        return await api.post("/inspection/v1/addInspection", {
            inspection_name:inspection_name,
            phone:phone,
            status:status
         });
    }
    async deleteInspection(inspection_name,phone,date){
        return await api.post("/inspection/v1/deleteInspection",{
            inspection_name:inspection_name,
            phone:phone,
            date:date
        });
    }
    
}


export default new InspectionApi();
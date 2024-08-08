import api from "./BaseUrl";

class InspectionApi {
  async createInspection(inspection_name) {
    return await api.post("/inspection/v1/createInspection", {
      inspection_name: inspection_name,
    });
  }
  async addInspection(inspection_name, phone, status) {
    return await api.post("/inspection/v1/addInspection", {
      inspection_name: inspection_name,
      student_phone: phone,
      status: status,
    });
  }
  async deleteInspection(inspection_name, phone, date) {
    return await api.post("/inspection/v1/deleteInspection", {
      inspection_name: inspection_name,
      student_phone: phone,
      date: date,
    });
  }
  async getAllInspection() {
    return await api.get("/inspection/v1/getAllInspection");
  }
  
  async getInspection(inspection_name,date) {
    return await api.post("inspection//v1/getInspection", {
      inspection_name: inspection_name,
      date: date,
    });
  }

  async addInspectionBarcod(url) {
    return await api.get(url);
  }
}

export default new InspectionApi();

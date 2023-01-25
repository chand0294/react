import axios from "axios";

const BASE_URL = "http://localhost:8080";
const GET_ALL_RECORDS = "/getAllRecords";
const GET_EMPLOYEE_DATA = "/getEmployee/{id}";

class EmployeeService {

    getPromiseData() {
        return axios.get(BASE_URL + GET_ALL_RECORDS);
    }

    // Observable getObeservableData(){
    //     return axios.get( BASE_URL + GET_EMPLOYEE_DATA);
    // }

}
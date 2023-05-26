import axios from "axios"; 

const GetDataReq = async (type: any) => {
    return axios.get('http://localhost:8080/api/v1/' + type);
  };
export default GetDataReq;
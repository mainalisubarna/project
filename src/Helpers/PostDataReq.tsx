import axios from "axios"; 

const PostDataReq = async (type: any, data: any) => {
    return axios.post('http://localhost:8080/api/v1/' + type, JSON.stringify(data));
  };
  
  
export default PostDataReq;
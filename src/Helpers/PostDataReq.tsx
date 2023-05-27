import axios from "axios";

const PostDataReq = async ( type : any,data: any ) => {
  const response = axios.post('http://localhost:8080/api/v1/' + type, data);
  return response;
};

export default PostDataReq;

import PostDataReq from "../Helpers/PostDataReq";
import RegisterForm from "../components/RegisterForm"
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const registerChangeHandler = (e: any) => {
    e.preventDefault();
    const dataRegister = {
      ...userData,
      [e.target.name]: e.target.value
    }
    setUserData(dataRegister);
  }
  const registerSubmitHandler= async (e:any) =>{
    e.preventDefault();
    try{
    const response = await PostDataReq('register',userData);
    if(response.data.status === true){
      navigate('/login');
      setUserData({});
      toast.success(response.data.message);
    }
  }catch(error){
    console.log(error);
  }
  }
  const navigatePage = (e:any) =>{
    e.preventDefault;
    navigate('/login');
  }
  return (
    <>
    <RegisterForm registerChangeHandler={registerChangeHandler} navigatePage={navigatePage} registerSubmitHandler={registerSubmitHandler} />
    </>
  )
}

export default RegisterPage
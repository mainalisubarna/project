import LoginForm from "../components/LoginForm";
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import PostDataReq from "../Helpers/PostDataReq";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../slice/authSlice";


function LoginPage() {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();
    const changeHandler = (e:any) =>{
        e.preventDefault();
        const data  = {
        ...credentials,
        [e.target.name] : e.target.value 
    }
    setCredentials(data);
    }
     
    useEffect(()=>{
        if (sessionStorage.getItem('userId') && sessionStorage.getItem('isLogged') === 'true') {
            navigate('/dashboard');
            toast.success('User Continued the journey Sucessfully',
            {
                autoClose: 5000
            });
        }
    },[])

    const navigatePage = (e:any)=>{
        e.preventDefault();
        navigate('/register');
    }

    const loginFormSubmit = async (e: any) => {
        e.preventDefault();
        const email : String = credentials.email;
        const password : String = credentials.password;
        if(email && password){
        try {
            const result = await PostDataReq('login', credentials);
            if(result.data.status === true){
                toast.success(result.data.message,
                    {
                        autoClose: 5000
                    });
                setCredentials({});
                dispatch(login(true));
                navigate('/dashboard');
                sessionStorage.setItem('isLogged', 'true');
                sessionStorage.setItem('userId',result.data.data.id);
            }
          } catch (error) {
            if (axios.isAxiosError(error)) {
                toast.error(error.response?.data.message); // Access the response data
              }
          }
        }else{
            toast.warn('Please Fill up the login Form properly')
        }
    }
    return (
        <>
    <LoginForm details={credentials} navigatePage={navigatePage} loginFormSubmit={loginFormSubmit} changeHandler={changeHandler} />
    </>
  );
}

export default LoginPage;
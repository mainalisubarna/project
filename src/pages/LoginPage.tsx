import LoginForm from "../components/LoginForm";
import { useEffect, useState} from 'react';
import { toast } from 'react-toastify';
import PostDataReq from "../Helpers/PostDataReq";
import {useNavigate} from 'react-router-dom';

function LoginPage() {
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

    const navigatePage = (e:any)=>{
        e.preventDefault();
        navigate('/register');
    }

    const loginFormSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const result = await PostDataReq('login', credentials);
            if(result.data.status === true){
                toast.success(result.data.message);
                setCredentials({});
                navigate('/dashboard');
                sessionStorage.setItem('isLogged', 'true');
                sessionStorage.setItem('userId',result.data.data.id);
            }
          } catch (error) {
                console.log(error)
          }
        }
    return (
        <>
    <LoginForm details={credentials} navigatePage={navigatePage} loginFormSubmit={loginFormSubmit} changeHandler={changeHandler} />
    </>
  );
}

export default LoginPage;
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import GetDataReq from '../Helpers/GetDataReq';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { login } from "../slice/authSlice";


const DashBoard = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (!sessionStorage.getItem('userId') || sessionStorage.getItem('isLogged') !== 'true') {
      navigate('/login');
      toast.warn('Please login to continue !!!');
    } else {
      const data = GetDataReq('products').then((fetchedData) => {
        setProducts(fetchedData.data.data);
        toast.success(fetchedData.data.message);
      });
    }
  }, [])
  const logOut = (e: any) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate('/login');
    dispatch(login(false));
    toast.success('Logged out Sucessfully');
  }

  return (
    <>
      
        <Button className='m-1 btn' onClick={logOut}>Logout</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default DashBoard
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  }
from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';

const LoginForm = ({navigatePage,loginFormSubmit,changeHandler}:any) => {
  return (
    <MDBContainer fluid className="p-3 my-5">
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
        </MDBCol>
        <MDBCol col='4' md='6'>
          <MDBInput wrapperClass='mb-4' label='Email address' type='email' name='email' size="lg" onChange={changeHandler}/>
          <MDBInput wrapperClass='mb-4' label='Password' type='password' name='password' size="lg" onChange={changeHandler}/>
          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <Button variant='light' onClick={navigatePage}>Register?</Button>
          </div>
          <Button className="mb-2 w-100" size="lg" variant='outline-primary' onClick={loginFormSubmit}>Log in</Button>
          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
          <Button className="mb-3 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
            <MDBIcon fab icon="facebook-f" className="mx-2"/>
            Continue with facebook
          </Button>
          <Button className="mb-3 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
            <MDBIcon fab icon="twitter" className="mx-2"/>
            Continue with twitter
          </Button>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default LoginForm
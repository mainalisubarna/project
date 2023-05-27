import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
  }
  from 'mdb-react-ui-kit';
  import {Button} from 'react-bootstrap';
  
  function RegisterForm({navigatePage,registerChangeHandler,registerSubmitHandler}:any) {
    return (
      <MDBContainer fluid>
        <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Full Name' type='text' className='w-100' name='fullName' onChange={registerChangeHandler}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg'/>
                  <MDBInput label='Phone Number' type='number' className='w-100' name='phoneNumber' onChange={registerChangeHandler}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg'/>
                  <MDBInput label='Your Email' type='email' name='email' onChange={registerChangeHandler}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='2x'/>
                  <MDBInput label='DOB' type='text' className='w-100' name='dob' onChange={registerChangeHandler}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg'/>
                  <MDBInput label='Password' type='password' name='password' onChange={registerChangeHandler}/>
                </div>
                <div className="d-flex flex-row align-items-center mb-4">
                <Button className='btn-sm' variant='light' onClick={navigatePage}>Login?</Button>
                </div>
                <Button className='mb-1' size='lg' variant="outline-primary" onClick={registerSubmitHandler}>Register</Button>  
              </MDBCol>
              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
              </MDBCol>  
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    );
  }
  
  export default RegisterForm;
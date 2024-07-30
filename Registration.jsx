import Form from 'react-bootstrap/Form';



const Registration=()=>{
    return(
        <>
         <Form>
         <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Contact</Form.Label>
        <Form.Control type="contact" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
        
        
        </>
    )
}

export default Registration;
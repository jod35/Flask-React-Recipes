import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const SignUpPage = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [show, setShow] = useState(false)
    const [serverResponse,setServerResponse]=useState('')


    const submitForm = () => {
        console.log("Form submitted");
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)


        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

    return (
        <div className="container">
            <div className="form">
                
                {show? 
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <p>
                       {serverResponse}
                    </p>
                </Alert>:<><h1>Sign Up Page</h1></>
                }
                <form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                            placeholder="Your username"
                            value={username}
                            name="username"
                            onChange={(e) => { setUsername(e.target.value) }}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Your email"
                            value={email}
                            name="email"
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Your password"
                            value={password}
                            name="password"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Your password"
                            value={confirmPassword}
                            name="confirmPassword"
                            onChange={(e) => { setConfirmPassword(e.target.value) }}

                        />
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <Button as="sub" variant="primary" onClick={submitForm}>SignUp</Button>
                    </Form.Group>
                    <br></br>
                    <Form.Group>
                        <small>Already have an account, <Link to='/login'>Log In</Link></small>
                    </Form.Group>
                    <br></br>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage
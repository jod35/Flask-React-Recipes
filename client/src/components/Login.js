import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LoginPage=()=>{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const loginUser=()=>{
        console.log(username);
        console.log(password);

        setUsername('')
        setPassword('')
    }

    return(
        <div className="container">
        <div className="form">
            <h1>Login Page</h1>
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
                    <Button as="sub" variant="primary" onClick={loginUser}>Login</Button>
                </Form.Group>
                <br></br>
                <Form.Group>
                    <small>Do not have an account? <Link to='/signup'>Create One</Link></small>
                </Form.Group>
                
            </form>
        </div>
    </div>
    )
}

export default LoginPage
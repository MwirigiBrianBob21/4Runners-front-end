import React,{ useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [customer, setCustomer] = useState({
        name: '',
        email: '',
        password:'',
        
    })


    const [errors, setErrors] = useState(null)

    
    const handleSubmission = (e) => {
        e.preventDefault()
        if (customer.name.length < 3) {
            setErrors('Name must be at least 3 characters long')
        } else if (customer.email.length < 3) {
            setErrors('Email must be at least 3 characters long')
        } else if (customer.password.length < 3) {
            setErrors('Password must be at least 3 characters long')
        } 
         else {
        fetch('http://localhost:9292/developers', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        // clear form
        setCustomer({
            name: '',
            email: '',
            password: ''
            
        })
        navigate('/signin')
        navigate('/reservation')
    }
    }
    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name] : e.target.value
        })
    }
  return (
    <div>
    {/* SignIn form */}
    <form className="sign-in-form" style={{marginTop: "50px"}}>
        <h1>Sign Up</h1>
        <div className="input-field">
            <input name="name" type="text" placeholder="Name"  autoFocus={true} value={customer.name} onChange={handleChange} />
            <input name="email" type="text" placeholder="Email"  autoFocus={true} value={customer.email} onChange={handleChange} />
            <input name="password" type="text" placeholder="password"  autoFocus={true} value={customer.email} onChange={handleChange} /> 
            <p>{errors}</p>
            <button type='submit' className="btn solid" onClick={handleSubmission}>Sign Up</button>
            <div  className='link-to-signup'>
            <p>Aleady have an account?
                <Link to="/signin" className="link">Sign In</Link>
            </p>
            <p>Want to book reservation?
                <Link to="/reservation" className="link">Reservation</Link>
            </p>
            </div>
            </div>
            </form>
</div>
  )
}
export default SignUp
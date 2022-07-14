import { useState, useEffect } from 'react'
import { FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
// global context and useNavigate later

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
// if possible prefer local state
// global state

function Register() {
  const [values, setValues] = useState(initialState)

  // global context and useNavigate later

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
       {/* <Logo /> */}

        <h3>{values.isMember? 'Login' : 'Register'}</h3>
        {!values.isMember && (
          <FormRow
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        )}

        {/* name field */}
        
        {/* email */}
         <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password */}
         <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        

        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>
          {values.isMember? 'Not a member yet' : ' Already a member?'}
          <button type='button' onClick={toggleMember}
            className="member-btn">{ values.isMember? 'Register' : 'Login'}</button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register;

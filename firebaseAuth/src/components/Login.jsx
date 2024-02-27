import React from 'react'
import Image from '../assets/OIP.jpeg'

const Login = () => {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-4">
          <div className="father">
            <div className='card card-body'>
              <form>
                <input type="email" placeholder="Enter Email" />
                <input type="password" placeholder="Enter Password" />
                <button className='btn btn-primary'>Login</button>
              </form> 
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <img src={Image} alt="OIP" className='imageSize' />
        </div>
      </div>
    </div>
  )
}

export default Login

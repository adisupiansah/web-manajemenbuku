// import gambar
// import bg from "../assets/imgAuth/bg.jpg"
import { useContext } from "react"
import { AuthContext } from "../Context/AuthProvider"
import logo from "../assets/imgAuth/sharingan.png"
import '../style/register.css'
import { Link } from "react-router-dom"
import { useState } from "react"

const Register = () => {
  // ambil state dari login
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [error, setError] = useState("")  
  const {register} = useContext(AuthContext)

  // buat handlesubmit untuk email dan password
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       await register(email, password)
    } catch (error) {
        console.error('ada error di register.jsx', error);
    }
  }

  return (
    <div className="container-fluid">
        <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="card-login">
                <div className="cardBody row">

                    <div className="col-md-6 col-sm-12">
       
                        <div className="logo d-flex justify-content-center align-items-center">
                            <img src={logo} alt="" width="20%"/>
                        </div>


                      <div className="form col-10 mx-auto">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3 input-with-icon">
                                <span className="icon"><i className="bi bi-envelope-fill"></i></span>
                                <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control input-register" placeholder="Create email" required/>
                            </div>

                            <div className="mb-3 input-with-icon">
                                <span className="icon"><i className="bi bi-lock-fill"></i></span>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control input-register" placeholder="Create password" required/>
                            </div>
                            
                            <div className="tombol justify-content-center align-items-center d-flex">
                              <button type="submit" className="btn col-md-4 col-sm-6">Submit</button>
                            </div>
                        </form>
                      </div>    

                      <div className="sign-up">
                        <Link to='/login' className="text-decoration-none">Already have an account? login now</Link>
                      </div>
                    </div>

                    <div className="col-md-6 card-gambar rounded-end d-none d-sm-block">
                        <div className="img">
                            {/* <!-- <img src="image/bg.jpg" alt="" class="img-fluid"> --> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register

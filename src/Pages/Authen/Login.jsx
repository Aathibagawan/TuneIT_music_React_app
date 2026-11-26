
import { signInWithEmailAndPassword, reload, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { _auth } from '../../Backend/Backend';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {

  // ! State to store the login form input values
  let [formData, setformData] = useState({
    Useremail: "",
    Password: "",
  })

  // & State to store the submitted login details
  let [finalformData, setfinalformData] = useState({})

  // * State to toggle password visibility
  let [eye, seteye] = useState(false)

  // & Naivation to home page use useNavigate hook from thr react router dom
  let navigate = useNavigate();

  // ! Handle input changes and update the corresponding state
  function handleChange(e) {
    let value = e.target.value
    let name = e.target.name
    setformData({
      ...formData, [name]: value
    })
  }

  // & Handle form submission and reset the input fields
  async function handlesubmit(e) {
    e.preventDefault();
    // Store the entered login details in finalformData
    // console.log(finalformData)
    setfinalformData(formData)

    try {
      let usercred = await signInWithEmailAndPassword(_auth, formData.Useremail, formData.Password)
      console.log(usercred);

      // Refresh Firebase user information
      await reload(usercred.user);

      if (usercred.user.emailVerified === true) {

        // navigating to the home 
        setTimeout(() => {
          navigate("/")
        }, 1000)

        // alert("Logined successfully")
        toast.success("Loging Successfully")

        // Clear the input fields after submission
        setformData({
          Useremail: "",
          Password: "",
        })

      }
      else {
        await signOut(_auth)
        toast.error("Please verify your email before logging in")
      }

    }
    catch (error) {
      // alert(error.message);
      toast.error(error.message);
      console.log(error.message);
    }

  }

  // * Monitor finalformData whenever its value changes
  useEffect(() => {
    console.log(finalformData);
  }, [finalformData]);


  return (
    <div className='min-h-[90vh] w-full bg-gray-950 flex justify-center items-center'>

      <div className='w-[390px] bg-gray-900 p-8 rounded-2xl'>

        <h1 className='text-3xl font-bold text-white text-center mb-2'>
          Welcome Back
        </h1>

        <p className='text-gray-400 text-center mb-5  '>
          Login to enjoy your music
        </p>

        <form className='flex flex-col gap-5' onSubmit={handlesubmit}>

          <input type="email" placeholder="Enter your email" onChange={handleChange} name='Useremail' value={formData.Useremail}
            className='w-full p-3 rounded-lg  text-white border  border-gray-700  focus:border-purple-500'
          />

          <div className='flex relative justify-end items-center '>
            <input type={eye ? 'text' : 'password'} placeholder="Enter your password" onChange={handleChange} name='Password' value={formData.Password}
              className='w-full p-3 rounded-md  text-white border border-gray-700  focus:border-purple-500'
            />
            <span className='absolute mr-4 cursor-pointer bg' onClick={() => seteye((e) => !e)}>
              {eye ? <IoEyeSharp color={eye ? 'white' : 'black'} /> : <LuEyeClosed color={eye ? 'white' : 'black'} />}
            </span>
          </div>

          <button
            type="submit"
            className='w-full p-3 bg-purple-600 text-white rounded font-semibold cursor-pointer hover:bg-purple-700 transition'
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login

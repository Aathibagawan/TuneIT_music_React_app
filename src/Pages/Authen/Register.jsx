import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { _auth } from '../../Backend/Backend';
import React, { useEffect, useState } from 'react'
import { IoEyeSharp } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {

  //! State to track controlled form input values
  let [formData, setformData] = useState({
    Username: "",
    Useremail: "",
    Password: "",
    Comfirmpassword: ""
  })

  //& State to store the submitted user registration data
  let [finalformData, setfinalformData] = useState({})

  //* State to toggle password visibility (false = hidden, true = visible)
  let [eye, seteye] = useState(false)

  // ~ Using USeNavigate to navigate to login page 
  let navigate = useNavigate();

  //! Updates the corresponding field in formData whenever the user types
  function handleChange(e) {
    let value = e.target.value
    let name = e.target.name
    setformData({
      ...formData, [name]: value
    })
  }

  // & Handles form submission, saves final data, and resets input fields
  async function handlesubmit(e) {
    e.preventDefault(); /* Prevent the page from refreshing when submitting the form */

    // Check password and confirm password match
    if (formData.Password !== formData.Comfirmpassword) {
      alert("Password and Confirm Password do not match!");
      return;
    }

    try {
      setfinalformData(formData) /*Store the submitted form details in state */

      // Create a new user account using Firebase Authentication
      let userData = await createUserWithEmailAndPassword(_auth, formData.Useremail, formData.Password);

      console.log("Registered successfully"); /* Display registration success message in the console */
      console.log(userData.user); /* Display the registered user's Firebase details */

      // Save username in Firebase user profile
      await updateProfile(userData.user, {
        displayName: formData.Username,
        photoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQyKd3kIBT_sFDm6nEg_Fm7kkkMXYD3nzMZPn4M07Iw&s=10"
      });

      await sendEmailVerification(userData.user) /* // Send an email verification link to the registered email */
      // alert("Email verification has send to" + formData.Useremail)
      toast.success("Sent Email verification")

      // Navigate to Login page after successful registration
      setTimeout(() => {
        navigate("/login");
      }, 2000)

      // Clear all input fields after successful registration
      setformData({
        Username: "",
        Useremail: "",
        Password: "",
        Comfirmpassword: ""
      })

    }
    catch (error) {
      // alert(error.message);
      toast.error(err.message.slice(22))
    }
  }

  useEffect(() => {
    console.log(finalformData);
  }, [finalformData]);


  return (
    // Main container with dark background and center alignment
    <section className='w-full min-h-[90vh] bg-gray-950 flex justify-center items-center '>

      {/* Registration form card */}
      <div className='w-[390px] bg-gray-900 p-8 rounded-2xl'>

        <h1 className='text-3xl font-bold text-amber-50 text-center mb-6'> Do Register Here</h1>

        <form className='flex flex-col gap1' onSubmit={handlesubmit}>

          {/* Username input field */}
          <label htmlFor='' className='text-amber-50 text-center font-semibold'>UserName</label>
          <input type='text' className='border-[1px] mt-2 rounded-md px-[20px] py-[5px] bg-gray-200 mb-3' placeholder='Enter the username'
            onChange={handleChange} name='Username' value={formData.Username} />

          {/* Email input field */}
          <label htmlFor='' className='text-amber-50 text-center font-semibold'>UserEmail</label>
          <input type='email' className='border-[1px] mt-2 rounded-md px-[10px] py-[5px] bg-gray-200 mb-3' placeholder='Enter the useremail'
            onChange={handleChange} name='Useremail' value={formData.Useremail} />


          {/* Password input with visibility toggle */}
          <label htmlFor='' className='text-amber-50 mb-2 font-semibold text-center'>Password</label>

          <div className='relative w-full mb-3 '>
            <input type={eye ? "text" : "password"} className='border-[1px] w-full rounded-md px-[10px] py-[5px] bg-gray-200 pr-9' placeholder='Enter the password'
              onChange={handleChange} name='Password' value={formData.Password} />

            {/* Eye icon to show or hide password */}
            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-700  cursor-pointer' onClick={() => seteye((prev) => !prev)}>
              {eye ? <IoEyeSharp /> : <LuEyeClosed />} </span>
          </div>

          {/* Confirm password input field */}
          <label htmlFor='' className='text-amber-50 font-semibold text-center'>Confirm PAssword</label>
          <input type='password' className='border-[1px] mt-2 rounded-md px-[10px] py-[5px] bg-gray-200 mb-3'
            placeholder='Enter the password again'
            onChange={handleChange} name='Comfirmpassword' value={formData.Comfirmpassword} />

          {/* Register button to submit the form */}
          <input type='Submit' value={"Register"} className='bg-[#8B28E4] px-[10px] mt-3 h-[40px] cursor-pointer font-semibold text-amber-50 rounded-4xl' />

        </form>
      </div>

    </section>
  )
}

export default Register

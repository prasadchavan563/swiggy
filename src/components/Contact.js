import React, { useEffect } from 'react'

const Contact = () => {


  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("timer in contact");
    },1000);
    return ()=>{
      clearInterval(timer)
      console.log("unmount useEffect");
    }
  },[])

  return (
    <div className='menu'>
      <h1>Contact Us Page</h1>
    </div>
  )
}

export default Contact;

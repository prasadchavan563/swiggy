import React, { useEffect } from 'react'
import useOnlineStatus from '../Utils/useOnlineStatus';

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
  const onlineStatus=useOnlineStatus()

  console.log(onlineStatus,"onlineStatus");

  if(onlineStatus===false){
    console.log("inside if condition");
    return <h1 className='onlineStatus'>Looks like you're offline!! Please check your Internet Connection</h1>
  }

  return (
    <div className='menu'>
      <h1>Contact Us Page</h1>
    </div>
  )
}

export default Contact;

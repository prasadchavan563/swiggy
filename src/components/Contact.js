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
    <div className='menu text-center'>
      <h1 className='font-bold text-3xl p-4 m-4'>Contact Us Page</h1>
      <form>
        <input type='text' placeholder='name' className='border border-black p-2 m-2 rounded-sm'/>
        <input type='text' placeholder='message' className='border border-black p-2 m-2 rounded-sm'/>
        <button className='border border-black p-2 m-2 rounded-sm bg-black text-white'> Submit</button>
      </form>
    </div>
  )
}

export default Contact;

import React from 'react'
import Buttons from './Buttons'
import { IoMdCall } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { BiMessageAltDetail } from "react-icons/bi"; 
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState("Anshu");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");
  const viacallsubmit=()=>{
    console.log("hey how can i help u press 1 for more information")
  };
  const onSubmit =(event)=>{
    // prevents the page from getting refresh
    event.preventDefault();
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <div className='flex gap-12'>
       <div className='height-[600px] width-[1161px] mt-[50px] ml-[120px] '>
       <div className='flex gap-5 '>
       <Buttons isoutline={false} text="VIA SUPPORT CHAT"  icon={<MdMessage/> } />
       <Buttons onClick={viacallsubmit} isoutline={false} text="VIA CALL"  icon={<IoMdCall /> } />
       </div>
      <div className='bg-white text-black'>
      <Buttons className="outline-button" isoutline={true} text="VIA EMAIL FORM"  icon={ <BiMessageAltDetail />} />
      </div>
      <form onSubmit={onSubmit} className='max-h-[440px] '>
        <div className='max-h-[440px] height-[50px] border border-[#5A5959] mb-6 mt-[25px] relative '>
            <label className='absolute top-[-14px] left-[12px]  text-black text-center bg-white ' htmlFor="name">Name </label>
            <input  className="height-[40px] py-[8px] w-full" type="text" name="name"/> 
        </div>
        <div className='max-h-[440px] height-[30px] border border-[#5A5959] mb-6 relative'>
            <label className='absolute top-[-14px] left-[12px]  text-black text-center bg-white' htmlFor="email ">Email </label>
            <input className="height-[40px] py-[8px]  w-full"type="email" name="email"/> 
        </div>
        <div className='max-h-[440px] height-[50px] border border-[#5A5959] mb-6 relative'>
            <label className='absolute top-[-14px] left-[12px]  text-black text-center bg-white' htmlFor="text">Text </label>
            <textarea  className="height-[40px] py-[8px]  w-full" name="text" rows="5"/>
        </div>
        <button className='bg-black text-white text-center text-base min-w-[210px] height-[30px] px-[15px] py-[8px] font-semibold ml-[210px]'>
          SUBMIT </button>
          <div>{name + " " + email + " " + text}</div>
        </form>
       
        </div>
        <div>
            <img src="/images/contact.svg"/>
        </div>
    </div>

  )
}

export default ContactForm;

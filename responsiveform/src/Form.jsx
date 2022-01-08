import React,{useState} from 'react'
import "./Form.css"

import { useNavigate } from "react-router-dom";

function Form(){
const [number,setNumber]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");

const [numberError,setNumberError]=useState("");
const [nameError,setNameError]=useState("");
const [emailError,setEmailError]=useState("");

let navigate = useNavigate();
function handleChange(e){
    setEmailError("");
    setNameError("");
    setNumberError("");
    e.preventDefault();
    const {name,value}=e.target;
    if(name==="number")
    setNumber(value);
    else if(name==="name"){
    setName(value);
    }
    else if(name==="email"){
        setEmail(value);
    }
}
function handleSubmit(e){
    e.preventDefault();

    if(number.length!=10){
        setNumberError("Please Enter a valid Mobile Number");

    }
    if(name.length<5){
        setNameError("Please Enter a valid Name");
    }
    if (!email.includes("@")){
        setEmailError("Please Enter a valid Email-Id");
        
    }
    else{
        setName("");
        setNumber("")

        setEmail("");
        navigate('/submitted');
    }
}

    return (
        <div className='main_formdiv'>
            <h2>Book a Free Demo Class</h2>
            <h3>Limited Seats Only!</h3>
            <div className="form">
            <div className='input-container'>
                <input className='phone_input' value={number} name="number" type="text" onChange={handleChange}/>
                <label className={number && 'filled'}>Mobile Number</label>
                <p className={number && number.length>0 ? 'nine_filled': 'nine_div'}>+91 -</p>
            </div>
            {numberError && <p style={{color:"red",fontSize:"10px"}}>{numberError}</p>}
            <div className='input-container'>
                <input value={name} name="name" type="text" onChange={handleChange}/>
                <label className={name && 'filled'}>Full Name</label>
            </div>
            {nameError && <p style={{color:"red",fontSize:"10px"}}>{nameError}</p>}
            <div className='input-container'>
                <input value={email} name="email" type="text" onChange={handleChange}/>
                <label className={email && 'filled'}>E-mail ID</label>
            </div>
            {emailError && <p style={{color:"red",fontSize:"10px"}}>{emailError}</p>}
            <p className='describe'>What Describes you best?</p>

            <select className='dropdown'>
                <option value="" disabled selected hidden> Select Option</option>
                <option value="Student">College Student</option>
                <option>Working Professional</option>
                <option>Full Time Aspirant</option>
                <option>Other</option>
            </select>
            
            <button className='submit' onClick={handleSubmit}>Submit</button>
            <p className='abcd'>By Clicking 'Submit' button, you explicitly solicit a call & email from uFaber</p>
            </div>
        </div>
    )

}


export default Form

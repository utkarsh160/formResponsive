import React from 'react'
import "./MainPage.css";
import upscImage from "./images/img2.jpg"
import Form from './Form';

const MainPage = () => {
    return (
        <div className="main_div">
            <div className='left_div'>
            <h2>UPSC <span className='simple'>PATHSHALA</span></h2>
            <h1>Best Online Coaching for UPSC Preparation</h1>
        <img src={upscImage}/>
            </div>
            <div className='right_div'>
                <Form/>
            </div>
            <img className='imagee2' src={upscImage}/>                 
             
        </div>
    )
}

export default MainPage

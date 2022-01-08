import React from 'react'
import "./Home.css"
import img1 from './images/img1.jpg';
const Home = () => {
    return (
        <div className='home'>
        <h5><b>Our Star Students</b></h5>
        <div className="card">
            <div className="star">
                <img src={img1} alt="abc" />
                <h6>Akshay Agarwal<br/><b>AIR 43 in UPSC 2019</b></h6>        
            </div>
            <div className="starfeedback">
                <p>"UPSC Pathsala's coverage of current affairs was <br/>something that I found very helpful. It covered <br/>everything in General studies syllabus."</p>
            </div>
        </div>
        <p>Our students vouch for us. Hear them speak.</p>
        <div className="video">
        <img src={img1} alt="abc"/>   
        </div>
        </div>
    )
}

export default Home

import React from "react";
import img1 from './images/img1.jpg';
import avatar from "./images/img_avatar.png";
import video from "./images/1.png";
import book from "./images/2.png";
import "./PostSubmitPage.css";
import "./success.css";
import "./Footer.css"

function success(){
    return(
        <div className="success_main">
            <h1>UPSC <span>Pathshala</span></h1>
            <div className="firstStep">
                <div className="div_1">
                    <p>Thank you for taking the first step towards UPSC Preparation</p>
                </div>
                <div className="divv1">
                <div className="div_2">
                    <img className="image1" src={img1}/>
                </div>
                <div className="div_3">
                    <h2>What's next?</h2>
                    <p><i class="fa fa-phone" aria-hidden="true"></i> You will get a call within 12 hours.</p>
                    <p><i class="fa fa-video-camera" aria-hidden="true"></i> Don't miss this call.Ask for the Free Demo.</p>
                    <p><i class="fa fa-book" aria-hidden="true"></i> Attend the Demo and experience our teaching methods.</p>
                    <p><i class="fa fa-certificate" aria-hidden="true"></i> Ask if you are eligible for any scholarship or discounts.</p>
                </div>
            </div>
            </div>
            <div className="star_student">
            <h1>Our Star Student</h1>
            <div className="starCard">
                <div className="star1">
                    <div className="star_img">
                        <img className="avatar" src={avatar}/>
                    </div>
                    <div className="star_data">
                        <h3 className="name">Akshay Agarwal</h3>
                        <h3 className="rank">AIR 43 in UPSC CSE 2019</h3>
                    </div>

                </div>
                <div className="star2">
                <p>"UPSC Pathsala's coverage of current affairs was
something that I found very helpful. It covered
everything in General Studies syllabus."</p>
                </div>
            </div>
            <p className="vouch">Our students vouch for us. Hear them speak.</p>
            <div className="videoo" >
            <img  src={video} />
            </div>
           
            </div>
            <div className="newFeatures">
                <div className="new1">
                    <img src={book}/>
                </div>
                <div className="new2">
                    <h1>Our New Features</h1>
                    <p>Monthly Current Affairs Magazine-EditionDec 2020</p>
                   <p>You will get this monthly magazine when you enroll with us</p>
                   <button>Download for free here</button>
                </div>
            </div>
            <div className="footer">
                <h2><b>What more you will get?</b></h2>
                <br></br>
                <div className="footera">
                    <div>Personal Mentorship</div>
                    <div>Daily Live Classes</div>
                </div>
                <div className="footerb">
                    <div>Mock Quizzes</div>
                    <div>Interview Preparation</div>
                </div>
                <div className="footerc">
                    <div>1000+ hours of Video Content</div>
                    <div>Help in filling DAF</div>
                </div>
                <div className="footerbuttons">
                    <button id='website'><i class="fa fa-globe" aria-hidden="true"></i> Website</button>
                    <button id='youtube'><i class="fa fa-youtube-play" aria-hidden="true"></i> Youtube</button>
                </div>


            </div>
            <div class="whatsapp">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </div>
<div className="contact">
<i class="fa fa-user" aria-hidden="true"></i>
</div>
<div className="chatwithus">
Chat With Us.
</div>
        </div>
    )
}
export default success;
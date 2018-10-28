import React, {Fragment} from 'react';
import { Glyphicon} from "react-bootstrap";
import NavBar from "./navigation";

class JFoot extends React.Component{

    render(){
        return(
            <ul className='footer-section'>
                <li className='footer-section-one'>
                    <span className='footer-section-heading'>DOWNLOAD THE APP</span>

                    <a href=''><img src='/JabongImg/gp3.png'/><br/></a>
                    <a href=''><img src='/JabongImg/AppStore.png'/></a>

                    <h3>2000+ BRANDS<br/>
                        500000+ STYLES</h3>


                </li>

                <li className='footer-section-two'>
                    <span className='footer-section-heading'>JABONG</span>

                    <ul className='fs-subhead'>
                        <li><a href='#'>Help / Support</a></li>
                        <li><a href='#'>About Us</a></li>
                        <li><a href='#'>Careers</a></li>
                        <li><a href='#'>Gift Cards</a></li>
                        <li><a href='#'>FAQs</a></li>
                        <li><a href='#'>Refer & Earn</a></li>
                        <li><a href='#'>Terms and Condition Offers</a></li>
                    </ul>

                </li>

                <li className='footer-section-third'>
                    <span className='footer-section-heading'>OUR POLICIES</span>

                    <ul className='fs-subhead'>
                        <li><a href='#'>Terms and Condition Offers</a></li>
                        <li><a href='#'>Privacy Policy</a></li>
                        <li><a href='#'>Vendor Code of Conduct</a></li>
                        <li><a href='#'>Whitehat</a></li>
                        <li><a href='#'>Deal of The Day</a></li>
                    </ul>

                </li>

                <li className='footer-section-four'>
                    <span className='footer-section-heading'>SUBSCRIBE TO NEWSLETTERS</span><br/>

                    <div>
                        <span className='fs-form'>
                         <input type='text' name='' placeholder='YOUR E-MAIL ADDRESS'/>Gender
                        <Glyphicon glyph='triangle-bottom'/>
                    </span>
                    </div>
                    <br/><br/>
                    <button className='fs-button'>SUBSCRIBE</button>
                </li>
            </ul>
        )
    }
}

export default JFoot;
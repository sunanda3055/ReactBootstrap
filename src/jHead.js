import React, {Fragment} from 'react';
import { Glyphicon} from "react-bootstrap";
import NavBar from "./navigation";

class JHead extends React.Component{

    render(){
        return(
            <Fragment>
                <div className='top-header'>
                    <a href='#'><img src='/JabongImg/Jabong.png' className='brand-logo'/></a>
                    <div className='search-containter'>
                    <span>
                         <input type='text' name='' placeholder='BE YOU. SEARCH YOUR STYLE'/><Glyphicon glyph='search'/>
                    </span>
                    </div>
                </div>

                <NavBar/>

                <p className="head-offer-tab">
                    <a href='#'>
                        <span className='offer-tab-text'>APP EXCLUSIVE OFFER - <b>DOWNLOAD THE JABONG APP TO GET UPTO Rs.1001 OFF</b></span>
                        <span className='offer-tab-more'>KNOW MORE<Glyphicon glyph="play" /></span>
                    </a>
                </p>

            </Fragment>
        )
    }
}

export default JHead;
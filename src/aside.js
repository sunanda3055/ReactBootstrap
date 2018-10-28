import React from 'react';
import {ListGroup,ListGroupItem,Image} from "react-bootstrap";

class Aside extends React.Component{

    render(){
        return(
            <ul className='aside-ul'>
                <li>
                    <Image src="/JabongImg/c1.jpg" responsive />
                </li>
                <li>
                    <Image src="/JabongImg/c2.jpg" responsive />
                </li>
            </ul>
        )
    }
}

export default Aside;
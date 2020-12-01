import React from "react";
import { Link } from "react-router-dom";
import printer from '../images/printer.jpg';
import centrifuge from '../images/centrifuge.jpg';
import fbs from '../images/fbs.jpg';

function Sidebar(props) {

	const image_list = [printer, centrifuge, fbs];

	function playGame(e) {
        props.setPick(e.target.dataset.id);
    }

    return (
        <div class={props.loc}>
        
       	{image_list.map((item) => (
       			<Link to="/play">
        			<img src={item} className="item" height="100px" width="100px" onClick={playGame} />	
       			</Link>
       		))}
        </div>
    )
}

export default Sidebar;

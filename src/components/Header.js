import React from "react";
import Scorebox from "./Scorebox";
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <header>
            <h1 className="header__title">
                <span>Penis</span>
                <span>Paper</span>
                <span>Scissors</span>
            </h1>
            <Scorebox score={props.score}/>
        </header>
    )
}

export default Header;

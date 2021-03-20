import React from "react";
import { Link } from "react-router-dom"

class Nav extends React.Component {
    constructor() {
        super();

        this.state = {

        }
    }

    render() {
        return(
            <header className="nav">
                <ul className="nav-links">
                    <li id="left" className="li">
                        <Link to="/add">
                            Addition
                        </Link>
                    </li>
                    <li id="right" className="li">
                        <Link to="/subtract">
                            Subtraction
                        </Link>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Nav
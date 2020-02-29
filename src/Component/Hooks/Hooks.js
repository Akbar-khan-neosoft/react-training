import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Hooks extends Component{
constructor(){
    super()
}

render(){
    return(
        <div>
                       <ul className="hooks-ul">
                    <Link to="/hooksusestate" >
                        <li>HooksUseState</li>
                    </Link>
                    <Link to="/hooksuseeffect" >
                        <li>HooksUseEffect</li>
                    </Link>
                    </ul>
                    
        </div>
    );
}
}

export default Hooks;
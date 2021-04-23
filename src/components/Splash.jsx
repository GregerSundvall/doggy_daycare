import Logo from "./doggy.png";
import { useEffect, useState } from "react";
import {useHistory, useParams} from "react-router-dom";




const Splash = ({gotData}) => {
    
    

  
    // setTimeout(() => { 
    //     goToWelcome();
    // }, 1000);

    return (
        <main id="splash">
            <img src={Logo} id="splashLogo" alt="dog"/>
        </main>
    )
}

export default Splash;
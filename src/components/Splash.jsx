import Logo from "./doggy.png";
import { useEffect, useState } from "react";




const Splash = ({goToWelcome, dogList, setDogList}) => {
    
    
    

    useEffect(() => {
        goToWelcome();
    }, [dataDownloaded])
    
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
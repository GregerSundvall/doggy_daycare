
import Logo from "./doggy.png";
import { useEffect, useState } from 'react';

const Welcome = () => {
    const [gotData, setGotData] = useState(false);



    return (
        <section>
            <img src={Logo} className="miniLogo" alt="dog"/>
            <p>Welcome screen</p>
        </section>
       
    )
}
    
    
    
    

export default Welcome;
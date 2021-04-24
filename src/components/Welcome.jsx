import { useState, useEffect } from "react";
import Logo from "./doggy.png";

const Welcome = (dogData) => {
    
    console.log(dogData)
    
    const [dogList, setDogList] = useState([]);

    useEffect(() => {
        for(let i = 0 ;i < dogData.length ; i++) {
            setDogList(...dogList, dogData[i])
            console.log(dogData[i])
        }
    }, [dogData, dogList, setDogList])

    console.log(dogList[0]);

    return (
            <section>
                <img src={Logo} className="miniLogo" alt="dog"/>
                <p>Welcome screen</p>
                <p>{dogList.length} dogs</p>
            </section>
       
    )
}
    
    
    
    

export default Welcome;
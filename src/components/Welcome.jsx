


import { useState, useEffect } from "react";
import Logo from "./doggy.png";
//import {getDogs} from "./Api";


const Welcome = ({dogList, setDogList}) => {
    console.log("welcome run")
    const [howManyPresent, setHowManyPresent] = useState(0);
    

  
    useEffect(() => {
        let present = 0;
        dogList.forEach(dog => {
            if (dog.present) {
                ++present
            }
        });
        setHowManyPresent(present);
    }, [dogList])
    
    function handlePresence(uuid) {
        const newList = dogList.map((dog) => {
            if (dog.uuid === uuid) {
                const updatedDog = {
                    ...dog,
                    present: false,
                };
                return updatedDog;
            }
            return dog;
        });
        setDogList(newList);
    }

    const listItems = dogList.map((dog) =>{
        return (dog.present) ?
            <div key={dog.uuid}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.uuid)}>Check out</button>
            </div>
        : null
    });
    
    

    

    return (
            <section>
                <img src={Logo} className="miniLogo" alt="dog"/>
                <h1>Welcome to Doggy Daycare!</h1>
                <p>{howManyPresent} dogs present</p>
                <ul>{listItems}</ul>
            </section>
       
    )
}
    
    
    
    

export default Welcome;
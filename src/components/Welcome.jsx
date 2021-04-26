


import { useState, useEffect } from "react";
import Logo from "./doggy.png";
//import {getDogs} from "./Api";


const Welcome = ({dogList}) => {
    console.log("welcome run")
    const [dogs, setDogs] = useState([]);
    const [dogsPresent, setDogsPresent] = useState(0);
    
    useEffect(() => {
        setDogs(dogList)
    }, [dogList])
    
    useEffect(() => {
        let present = 0;
        dogs.forEach(dog => {
            if (dog.present) {
                ++present
            }
        });
        setDogsPresent(present);
    }, [dogs])
    


    const listItems = dogs.map((dog) =>{
        return (dog.present) ?
            <div key={dog.uuid}>
                <li>{dog.name}</li>
                <button>Check out</button>
            </div>
        : null
    });
    
    

    

    return (
            <section>
                <img src={Logo} className="miniLogo" alt="dog"/>
                <h1>Welcome to Doggy Daycare!</h1>
                <p>{dogsPresent} dogs present</p>
                <ul>{listItems}</ul>
            </section>
       
    )
}
    
    
    
    

export default Welcome;
import Logo from "./doggy.png";
//import { useEffect, useState } from "react";


//   let dogsData = getDogs();
//   for(let i = 0; i < dogList.length; i++) {
//     let dogData = dogsData[i]
//     setDogList(...dogList, dogData)
//     console.log(dogData)
//   }



const Splash = ({goToWelcome}) => {
    
    

    // useEffect(() => {
    //     for(let i = 0 ;i < data.length ; i++) {
    //         setDogList(...dogList, data[i])
    //         console.log(data[i])
    //     }
    //     setGotData(true);
    //     console.log(data);
    //     //goToWelcome();
    // }, [data])

    // useEffect(() => {
    //     console.log(gotData)
    //     //goToWelcome();
    // }, [gotData])
    
    setTimeout(() => { 
        goToWelcome();
    }, 1000);

    return (
        <main id="splash">
            <img src={Logo} id="splashLogo" alt="dog"/>
            <p>Fetching Dogs...</p>
        </main>
    )
}

export default Splash;
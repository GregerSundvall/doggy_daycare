


import { useState, useEffect } from "react";
import Logo from "./doggy.png";


const Welcome = ({dogList, setDogList}) => {
    const loggedIn = "loggedIn", loggedOut = "loggedOut", all = "all";

  
    


    
    function handlePresence(uuid) {
        const newList = dogList.map((dog) => {
            if (dog.uuid === uuid) {
                const updatedDog = {
                    ...dog,
                    present: !dog.present,
                };
                return updatedDog;
            }
            return dog;
        });
        setDogList(newList);
    }

    function getButtonText(uuid) {
        let result = dogList.filter(dog => dog.uuid === uuid);
        if(result[0].present === true) {
            return "Check OUT"
        } else {
            return "Check IN"
        }
    }




    const listItemsIn = dogList.map((dog) =>{
        return (dog.present) ?
            <div key={dog.uuid}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.uuid)}>{getButtonText(dog.uuid)}</button>
            </div>
        : null
    });

    const listItemsOut = dogList.map((dog) =>{
        return (!dog.present) ?
            <div key={dog.uuid}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.uuid)}>{getButtonText(dog.uuid)}</button>
            </div>
        : null
    });

    const listItemsAll = dogList.map((dog) =>{
        return (
            <div key={dog.uuid}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.uuid)}>{getButtonText(dog.uuid)}</button>
            </div>
        )
    });

    const [viewInOutAll, setViewInOutAll] = useState(loggedIn);
    let content = null;
    switch (viewInOutAll) {
        case loggedIn:
            content = <ul>{listItemsIn}</ul>;
            break;
            case loggedOut:
                content = <ul>{listItemsOut}</ul>;
                break;
                case all:
                    content = <ul>{listItemsAll}</ul>;
                    break;
        default:
            content = <ul>{listItemsIn}</ul>;
    }


    const [dogCount, setDogCount] = useState(dogList.length);
    useEffect(() => {
        let allDogs = dogList.length;
        let presentDogs =  0;
        dogList.forEach(dog => {
            if (dog.present) {
                ++presentDogs
            }
        });
        switch (viewInOutAll) {
            case loggedIn:
                setDogCount(presentDogs);
                break;
            case loggedOut:
                setDogCount(allDogs - presentDogs);
                break;
            case all:
                setDogCount(allDogs);
                break;
            default:
                break;
        }
    }, [viewInOutAll, dogList])

    

    


    // const listItems = dogList.map((dog) =>{
    //     return (dog.present) ?
    //         <div key={dog.uuid}>
    //             <li>{dog.name}</li>
    //             <button onClick={() => handlePresence(dog.uuid)}>Check out</button>
    //         </div>
    //     : null
    // });
    
    

    

    return (
            <section>
                <img src={Logo} className="miniLogo" alt="dog"/>
                <h1>Welcome to Doggy Daycare!</h1>
                <nav id="checkedInMenu">
                    <div onClick={() => setViewInOutAll(loggedIn)}>Checked In</div>
                    <div onClick={() => setViewInOutAll(loggedOut)}>Checked Out</div>
                    <div onClick={() => setViewInOutAll(all)}>All Dogs</div>
                </nav>
                <p>Showing {dogCount} dogs</p>
                {content}
            </section>
       
    )
}
    
    
    
    

export default Welcome;
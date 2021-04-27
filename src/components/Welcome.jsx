


import { useState, useEffect } from "react";
import Logo from "./doggy.png";



const Welcome = ({ goToDogDetails, setCurrentDog ,dogList, setDogList}) => {
    const loggedIn = "loggedIn", loggedOut = "loggedOut", all = "all";






    function handlePresence(chipNumber) {
        const newList = dogList.map((dog) => {
            if (dog.chipNumber === chipNumber) {
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

    function getButtonText(chipNumber) {
        let result = dogList.filter(dog => dog.chipNumber === chipNumber);
        if (result[0].present === true) {
            return "Check Out"
        } else {
            return "Check In"
        }
    }

    function handleGoToDogDetails(dog) {
        setCurrentDog(dog);
        goToDogDetails()
    }


    const listItemsIn = dogList.map((dog) => {
        return (dog.present) ?
            <div onClick={() => handleGoToDogDetails(dog)} key={dog.chipNumber}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.chipNumber)}>{getButtonText(dog.chipNumber)}</button>
            </div>
            : null
    });

    const listItemsOut = dogList.map((dog) => {
        return (!dog.present) ?
            <div onClick={() => handleGoToDogDetails(dog)} key={dog.chipNumber}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.chipNumber)}>{getButtonText(dog.chipNumber)}</button>
            </div>
            : null
    });

    const listItemsAll = dogList.map((dog) => {
        return (
            <div onClick={() => handleGoToDogDetails(dog)} key={dog.chipNumber}>
                <li>{dog.name}</li>
                <button onClick={() => handlePresence(dog.chipNumber)}>{getButtonText(dog.chipNumber)}</button>
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
        let presentDogs = 0;
        dogList.forEach(dog => {
            if (dog.present) {
                ++presentDogs
            }
        });
        switch (viewInOutAll) {
            case loggedIn:
                setDogCount(presentDogs);
                document.getElementById("checkedIn").className = "selected";
                document.getElementById("checkedOut").className = "";
                document.getElementById("checkedAll").className = "";
                break;
            case loggedOut:
                setDogCount(allDogs - presentDogs);
                document.getElementById("checkedIn").className = "";
                document.getElementById("checkedOut").className = "selected";
                document.getElementById("checkedAll").className = "";
                break;
            case all:
                setDogCount(allDogs);
                document.getElementById("checkedIn").className = "";
                document.getElementById("checkedOut").className = "";
                document.getElementById("checkedAll").className = "selected";
                break;
            default:
                break;
        }
    }, [viewInOutAll, dogList])






    return (
        <section>
            <img src={Logo} className="miniLogo" alt="dog" />
            <h1>Welcome to Doggy Daycare!</h1>
            <nav id="checkedInMenu">
                <div id="checkedIn" onClick={() => setViewInOutAll(loggedIn)}>Checked In</div>
                <div id="checkedOut" onClick={() => setViewInOutAll(loggedOut)}>Checked Out</div>
                <div id="checkedAll" onClick={() => setViewInOutAll(all)}>All Dogs</div>
            </nav>
            <p>Showing {dogCount} dogs</p>
            {content}
        </section>

    )
}





export default Welcome;
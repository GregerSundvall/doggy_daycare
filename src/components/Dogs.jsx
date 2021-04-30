


import { useState, useEffect } from "react";



const Dogs = ({ goToDogDetails, setCurrentDog ,dogList, setDogList}) => {
    const loggedIn = "loggedIn", loggedOut = "loggedOut", all = "all";
    let previousTab = "";





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
            return "CHECK OUT"
        } else {
            return "CHECK IN"
        }
    }

    function handleGoToDogDetails(dog) {
        setCurrentDog(dog);
        goToDogDetails()
    }


    const listItemsIn = dogList.map((dog) => {
        return (dog.present) ?
            <li key={dog.chipNumber}>
                <p id="listName" onClick={() => handleGoToDogDetails(dog)}>{dog.name}</p>
                <p id="listBreed" onClick={() => handleGoToDogDetails(dog)}>{dog.breed}</p>
                <div className="inOutButton" onClick={() => handlePresence(dog.chipNumber)}> {getButtonText(dog.chipNumber)} </div>
            </li>
            : null
    });

    const listItemsOut = dogList.map((dog) => {
        return (!dog.present) ?
            <li id="listInfoWrapper" key={dog.chipNumber}>
                <p id="listName" onClick={() => handleGoToDogDetails(dog)}>{dog.name}</p>
                <p id="listBreed" onClick={() => handleGoToDogDetails(dog)}>{dog.breed}</p>
                <div className="inOutButton" onClick={() => handlePresence(dog.chipNumber)}> {getButtonText(dog.chipNumber)} </div>
            </li>
            : null
    });

    const listItemsAll = dogList.map((dog) => {
        return (
            <li key={dog.chipNumber}>
                <p id="listName" onClick={() => handleGoToDogDetails(dog)}>{dog.name}</p>
                <p id="listBreed" onClick={() => handleGoToDogDetails(dog)}>{dog.breed}</p>
                <div className="inOutButton" onClick={() => handlePresence(dog.chipNumber)}> {getButtonText(dog.chipNumber)} </div>
            </li>
        )
    });

    const [viewInOutAll, setViewInOutAll] = useState(loggedIn);
    let content = null;
    switch (viewInOutAll) {
        case loggedIn:
            content = <ul id="listWrapper">{listItemsIn}</ul>;
            break;
        case loggedOut:
            content = <ul id="listWrapper">{listItemsOut}</ul>;
            break;
        case all:
            content = <ul id="listWrapper">{listItemsAll}</ul>;
            break;
        default:
            content = <ul id="listWrapper">{listItemsIn}</ul>;
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
            <h2 id="checkedInMenu">
                <div id="checkedIn" onClick={() => setViewInOutAll(loggedIn)}>Checked In</div>
                <div id="checkedOut" onClick={() => setViewInOutAll(loggedOut)}>Checked Out</div>
                <div id="checkedAll" onClick={() => setViewInOutAll(all)}>All Dogs</div>
            </h2>
            <p id="dogCount">Showing {dogCount} dogs</p>
            {content}
        </section>

    )
}





export default Dogs;
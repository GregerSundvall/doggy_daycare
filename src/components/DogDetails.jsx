import { useEffect, useState } from "react";


const DogDetails = ({currentDog, dogList, setDogList}) => {
    
    const [buttonText, setButtonText] = useState("");
    const [present, setPresent] = useState(currentDog.present);

    useEffect(() => {
        setButtonText(present ? "Check Out" : "Check In");
    }, [present])


    const handleClick = e => {
        currentDog.present = !currentDog.present;
        setPresent(!present)
    }


   

   

    return (
        <section id="dogDetails">
            <h2 id="dogDetailsNameBar">
                <div id="dogDetailsNameBox">
                    <p id="dogDetailsName">{currentDog.name}</p>
                </div>
                
            </h2>
            <div id="dogInfoWrapper">
                <img src={currentDog.img} alt={currentDog.name}/>
                <div>
                    <div className="inOutButton" onClick={e=>handleClick(e)}>{buttonText}</div>
                </div>
                <div id="ownerSection">
                    <p id="ownerText">Owner</p>
                    <div id="ownerInfo">
                        <p className="alignRight">{currentDog.owner.name} {currentDog.owner.lastName}</p>
                        <p className="alignLeft">{currentDog.owner.phoneNumber}</p>
                    </div>
                    
                </div>
                <div id="miscInfoWrapper">
                    <div className="miscInfoRow">
                        <p className="alignRight">Age:</p>
                        <p className="alignLeft">{currentDog.age}</p>
                    </div>
                    <div className="miscInfoRow">
                        <p className="alignRight">Breed:</p>
                        <p className="alignLeft">{currentDog.breed}</p>
                    </div>
                    <div className="miscInfoRow">
                        <p className="alignRight">Sex:</p>
                        <p className="alignLeft">{currentDog.sex}</p>
                    </div>
                    <div className="miscInfoRow">
                        <p className="alignRight">Chip Nr:</p>
                        <p className="alignLeft">{currentDog.chipNumber}</p>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default DogDetails;
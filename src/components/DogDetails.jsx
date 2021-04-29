

const DogDetails = ({currentDog}) => {
    

    return (
        <section id="dogDetails">
            <h1>{currentDog.name}</h1>
            <div id="dogInfoWrapper">
                <img src={currentDog.img} alt={currentDog.name}/>
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
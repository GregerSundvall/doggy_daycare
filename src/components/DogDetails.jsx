import { useState } from "react";
import "./DogDetails.css";

const DogDetails = ({currentDog}) => {
    

    return (
        <section id="dogDetails">
            <h1>{currentDog.name}</h1>
            <img src={currentDog.img} alt={currentDog.name}/>
            <div id="ownerSection">
                <p>Owner</p>
                <div id="ownerInfo">
                    <p>{currentDog.owner.name} {currentDog.owner.lastName}</p>
                    <p>{currentDog.owner.phoneNumber}</p>
                </div>
                
            </div>
            <table>
                <tbody id="miscInfo">
                    <tr>
                        <td>Age:</td>
                        <td>{currentDog.age}</td>
                        <td>Breed:</td>
                        <td>{currentDog.breed}</td>
                    </tr>
                    <tr>
                        <td>Sex:</td>
                        <td>{currentDog.sex}</td>
                        <td>Chip Nr:</td>
                        <td>{currentDog.chipNumber}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default DogDetails;